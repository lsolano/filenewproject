'use strict';

import { Request, Response } from 'ninejs/modules/webserver/WebServer'
import Auth from 'ninejs-auth-module'
import { view, mergeWithoutConflictAsync, removeWithoutConflictAsync } from 'ninejs-store/couchdb/couchUtils'
import { get, post, put, del } from 'ninejs/modules/webserver/Rest'
import { Database } from 'ninejs-store/CouchDB'
import Endpoint from 'ninejs/modules/webserver/Endpoint'
import { Ticket } from './client/common'

let clone = (source: any) => {
    return source;
};

export default function getEndpoint(auth: Auth, database: Database) {
    let tickets = get<void, Ticket[]>({
        route: '/tickets',
        inputMap: () => {
            return void 0;
        }
    }, async (_:void, req:Request, res: Response) => {
        let user = await auth.getUser(req.session.username);
        if (user) {
            let tickets = await view<Ticket>(database, 'tickets/all', { map: clone, include_docs: true });
            return tickets;
        }
        else {
            res.status(403).send('Unauthorized');
            return null;
        }
    });
    tickets.children = [
        get<string, Ticket>({
            route: '/:key',
            inputMap: (req: Request) => {
                return req.params.key;
            }
        }, async (key: string, req:Request, res: Response) => {
            let user = await auth.getUser(req.session.username);
            if (user) {
                let tickets = await view<Ticket>(database, 'tickets/all', { key: key, include_docs: true, map: clone });
                let ticket = tickets[0];
                if (ticket) {
                    return ticket;
                }
                else {
                    res.status(404).send('not found');
                    return null;
                }
            }
            else {
                res.status(403).send('Unauthorized');
                return null;
            }
        }),
    ];

    let r: Endpoint[] = [
        tickets,
        get<void, string[]>({
            route: '/permissions',
            inputMap: () => {
                return void 0;
            }
        }, async (_:void, req:Request) => {
            let permissions = await auth.permissions() || [];
            return permissions;
        }),
        get<void, Ticket[]>({
            route: '/admin/tickets',
            inputMap: () => {
                return void 0;
            }
        }, async (_:void, req:Request) => {
            let user = await auth.getUser(req.session.username);
            let permissions = user.permissions || [];
            if (permissions.indexOf('administrator') >= 0) {
                let tickets = await view<Ticket>(database, 'tickets/all', { include_docs: true, map: clone });
                return tickets;
            }
            else {
                return [];
            }
        }),
        get<string, Ticket>({
            route: '/admin/tickets/:key',
            inputMap: (req: Request) => {
                return req.params.key;
            }
        }, async (key: string, req:Request) => {
            let user = await auth.getUser(req.session.username);
            let permissions = user.permissions || [];
            if (permissions.indexOf('administrator') >= 0) {
                let tickets = await view<Ticket[]>(database, 'tickets/all', { key: key, include_docs: true, map: clone });
                return tickets[0];
            }
            else {
                return null;
            }
        }),
        post<Ticket, string>({
            route: '/admin/tickets/:key',
            inputMap: (req: Request) => {
                let r: Ticket = req.body;
                if (req.params.key === 'new') {
                    delete r._id;
                }
                else {
                    r._id = req.params.key;
                }
                return r;
            }
        }, async (ticket: Ticket, req: Request, res: Response) => {
            let user = await auth.getUser(req.session.username);
            let permissions = user.permissions || [];
            if (permissions.indexOf('administrator') >= 0) {
                let id:string;
                if (!ticket._id) {
                    delete ticket._id;
                }
                else {
                    id = ticket._id;
                }
                ticket.type = 'ticket';
                let resp = await mergeWithoutConflictAsync(database, id, ticket);
                return resp.id;
            }
            else {
                res.status(403).send('Unauthorized');
            }
        }),
        del<string, void>({
            route: '/admin/tickets/:key',
            inputMap: (req: Request) => {
                return req.params.key;
            }
        }, async (key: string, req: Request, res: Response) => {
            let user = await auth.getUser(req.session.username);
            let permissions = user.permissions || [];
            if (permissions.indexOf('administrator') >= 0) {
                let resp = await removeWithoutConflictAsync(database, key);
                return resp.id;
            }
            else {
                res.status(403).send('Unauthorized');
            }
        })
    ];
    return r;
}