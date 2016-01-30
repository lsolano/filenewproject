'use strict';

import { Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './skin/TicketView'
import { ticket } from '../services/operations'
import { Ticket } from '../common'
import { alert } from '../services/alertify'

export interface TicketViewArgs extends WidgetArgs {
}
class TicketView extends Widget {
    ticketName: string;
    outline: string;
    currentTicket: Ticket;
    onUpdatedSkin () {
        super.onUpdatedSkin();
        let domNode = this.domNode as HTMLElement;
    }
    load (ticketId: string) {
        return ticket(ticketId).then((ticket: Ticket) => {
            this.set('currentTicket', ticket);
            this.set('ticketName', ticket.title);
        });
    }
    constructor (args: TicketViewArgs) {
        super(args);
    }
}
TicketView.prototype.skin = defaultSkin;

export default TicketView