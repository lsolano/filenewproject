/// <amd-dependency path="./skin/common.ncss" />
/// <amd-dependency path="bootstrap/js/bootstrap" />

'use strict';

import Auth from 'ninejs-auth-module/client/Auth'
import { emptyNode } from 'ninejs/ui/utils/setText'
import { MainContainer } from 'ninejs-container-module/client'
import { Container } from 'ninejs/modules/client/container'
import TicketView from './widgets/TicketView'
import TicketList from './widgets/TicketList'
import AdminTicketList from './widgets/AdminTicketList'
import AdminTicket from './widgets/AdminTicket'
import setClass from 'ninejs/ui/utils/setClass'
import { Router } from 'ninejs/client/router'

declare var require: any;

setTimeout(() => {
    [
        require('./skin/common.ncss')
    ].forEach(function (style) {
        style.enable();
    });
}, 500);

class TicketsClient {
    container: MainContainer;
    containerUnit: Container;
    config: any;
    auth: Auth;
    router: Router;
    constructor (config: any, auth: Auth, container: MainContainer, containerUnit: Container, router: Router) {
        this.container = container;
        this.containerUnit = containerUnit;
        this.config = config;
        this.auth = auth;
        this.router = router;
    }
    init () {
        setClass (window.document.body, 'flexFrame');
        let footer = this.containerUnit.getContainer('footer');
        emptyNode(footer);

        var ticketView = new TicketView({
        });
        var ticketList = new TicketList({
            router: this.router
        });
        var adminTicketList = new AdminTicketList({ router: this.router });
        var adminTicket = new AdminTicket({ router: this.router });
        this.auth.register('/', () => {
            this.container.activate();
            return ticketList.show().then(() => {
                return ticketList.refresh().then(() => {
                    this.container.set('content', ticketList);
                });
            });
        }, [], {

        });
        this.auth.register('/admin/tickets', () => {
            this.container.activate();
            return adminTicketList.show().then(() => {
                return adminTicketList.refresh().then(() => {
                    this.container.set('content', adminTicketList);
                });
            });
        }, ['administrator'], {
            emitArgs: {
                key: 'manageTickets'
            }

        });
        this.auth.register('/admin/tickets/:ticketId', (e: any) => {
            this.container.activate();
            return adminTicket.load(e.ticketId).then(() => {
                adminTicket.show().then(() => {
                    this.container.set('content', adminTicket);
                });
            });
        }, ['administrator'], {
            emitArgs: {
                key: 'manageTickets'
            }
        });
        this.auth.register('/tickets/:ticketId', (e: any) => {
            this.container.activate();
            return ticketView.load(e.ticketId).then(() => {
                return ticketView.show().then(() => {
                    this.container.set('content', ticketView);
                });
            });
        }, [], {

        });

        this.container.addMenuItem('mainMenu', {
            text: 'Manage Tickets',
            key: 'manageTickets',
            icon: 'entypo-ticket',
            action: (e: any) => {
                this.router.go('/admin/tickets');
            }
        });
    }
}

export default TicketsClient;