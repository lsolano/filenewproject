import { Widget, WidgetArgs } from 'ninejs/ui/Widget';
import { PromiseType } from 'ninejs/core/deferredUtils';
import { Router } from 'ninejs/client/router';
export interface TicketListArgs extends WidgetArgs {
    router: Router;
}
declare class TicketList extends Widget {
    todoTicketsNode: HTMLElement;
    inProgressTicketsNode: HTMLElement;
    doneTicketsNode: HTMLElement;
    router: Router;
    onUpdatedSkin(): void;
    refresh(): PromiseType<any>;
    constructor(args: TicketListArgs);
}
export default TicketList;
