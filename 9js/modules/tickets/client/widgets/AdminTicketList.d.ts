import { Widget, WidgetArgs } from 'ninejs/ui/Widget';
import { MemoryInstance } from './Grid';
import { Router } from 'ninejs/client/Router';
export interface AdminTicketListArgs extends WidgetArgs {
    router: Router;
}
declare class AdminTicketList extends Widget {
    grid: any;
    collection: MemoryInstance;
    router: Router;
    onUpdatedSkin(): void;
    refresh(): any;
    newButtonClicked(): void;
    constructor(args: AdminTicketListArgs);
}
export default AdminTicketList;
