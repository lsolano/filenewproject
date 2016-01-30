import { Widget, WidgetArgs } from 'ninejs/ui/Widget';
import { Ticket } from '../common';
import { Modal } from 'ninejs-container-module/client';
export interface SmallTicketArgs extends WidgetArgs {
    ticket: Ticket;
}
declare class SmallTicket extends Widget {
    ticketName: string;
    outline: string;
    currentTicket: Ticket;
    documentListModal: Modal;
    lookupTag(tag: string): any;
    onUpdatedSkin(): void;
    load(ticketId: string): any;
    constructor(args: SmallTicketArgs);
}
export default SmallTicket;
