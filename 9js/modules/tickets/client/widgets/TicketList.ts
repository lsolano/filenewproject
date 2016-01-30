'use strict';

import { Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './skin/TicketList'
import { PromiseType } from 'ninejs/core/deferredUtils'
import { ticketList } from '../services/operations'
import { Ticket } from '../common'
import SmallTicket from './SmallTicket'
import { Router } from 'ninejs/client/router'
import { emptyNode } from 'ninejs/ui/utils/setText'

export interface TicketListArgs extends WidgetArgs {
    router: Router;
}
class TicketList extends Widget {
    todoTicketsNode: HTMLElement;
	inProgressTicketsNode: HTMLElement;
	doneTicketsNode: HTMLElement;
    router: Router;
    onUpdatedSkin () {
        super.onUpdatedSkin();
    }
    refresh () : PromiseType<any> {
        return ticketList().then((tickets: Ticket[]) => {
			emptyNode(this.todoTicketsNode);
			emptyNode(this.inProgressTicketsNode);
			emptyNode(this.doneTicketsNode);
            tickets.forEach((ticket) => {
                let small = new SmallTicket({ ticket: ticket });
				if (ticket.status === 'done') {
					small.show(this.doneTicketsNode);
				}
				else if (ticket.status === 'todo') {
					small.show(this.todoTicketsNode);
				}
				else if (ticket.status === 'inProgress') {
					small.show(this.inProgressTicketsNode);
				}
            });
        });
    }
    constructor (args: TicketListArgs) {
        super(args);
    }
}
TicketList.prototype.skin = defaultSkin;
export default TicketList