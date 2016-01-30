'use strict';

import { Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './skin/SmallTicket'
import { ticket } from '../services/operations'
import { Ticket } from '../common'
import { alert } from '../services/alertify'
import { Modal } from 'ninejs-container-module/client'

export interface SmallTicketArgs extends WidgetArgs {
    ticket: Ticket;
}
class SmallTicket extends Widget {
    ticketName: string;
    outline: string;
    currentTicket: Ticket;
    documentListModal: Modal;
    lookupTag (tag: string) {
        return this.documentListModal.show({ backdrop: 'static' }, tag);
    }
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
    constructor (args: SmallTicketArgs) {
        super(args);
    }
}
SmallTicket.prototype.skin = defaultSkin;

export default SmallTicket