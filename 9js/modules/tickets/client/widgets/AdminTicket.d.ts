import { Widget, WidgetArgs } from 'ninejs/ui/Widget';
import { Router } from 'ninejs/client/Router';
import Properties from 'ninejs/core/ext/Properties';
import Editor from "ninejs/ui/Editor";
export interface AdminTicketArgs extends WidgetArgs {
    router: Router;
}
declare class AdminTicket extends Widget {
    grid: any;
    router: Router;
    ticket: Properties;
    permissionsNode: HTMLElement;
    statusSelect: Editor;
    onUpdatedSkin(): void;
    load(key: string): any;
    newButtonClicked(): void;
    cancelButtonClicked(): void;
    saveButtonClicked(): void;
    constructor(args: AdminTicketArgs);
}
export default AdminTicket;
