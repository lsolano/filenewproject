'use strict';
import { get, post, del } from 'ninejs/request'
import config from 'ninejs/config'
import { resolve } from 'ninejs/core/deferredUtils'
import { Ticket } from '../common'

export function ticketList () {
    return get(config.baseUrl + 'service/tickets');
}
export function permissions () {
    return get(config.baseUrl + 'service/permissions');
}
export function getAdminTickets () : Promise<Ticket[]> {
    return get({ url: `${config.baseUrl}service/admin/tickets`, handleAs: 'json' });
}
export function getAdminTicket (key: string) : Promise<Ticket> {
    if (key === 'new') {
        let p: Ticket = {
            type: 'ticket',
            _id: '',
            title: '',
            description: '',
            projectName: 'Nine Tickets',
            status: 'todo'
        };
        return resolve(p);
    }
    else {
        return get({url: `${config.baseUrl}service/admin/tickets/${key}`, handleAs: 'json'});
    }
}
export function ticket (key: string) : Promise<Ticket> {
    return get({url: `${config.baseUrl}service/tickets/${key}`, handleAs: 'json'});
}
export function saveTicket (ticket: Ticket) : Promise<Ticket> {
    return post({ url: `${config.baseUrl}service/admin/tickets/${ticket._id ? ticket._id : 'new'}`, handleAs: 'json', data: ticket });
}

export function deleteTicket (key: string) : Promise<void> {
    return del({ url: `${config.baseUrl}service/admin/tickets/${key}` });
}