import { Widget, WidgetArgs } from 'ninejs/ui/Widget';
import { Ticket } from '../common';
export interface TicketViewArgs extends WidgetArgs {
}
declare class TicketView extends Widget {
    ticketName: string;
    outline: string;
    currentTicket: Ticket;
    onUpdatedSkin(): void;
    load(ticketId: string): any;
    constructor(args: TicketViewArgs);
}
export default TicketView;
