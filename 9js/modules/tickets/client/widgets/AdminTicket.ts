'use strict';

import { Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './skin/AdminTicket'
import { all } from 'ninejs/core/deferredUtils'
import { Ticket } from '../common'
import { Router } from 'ninejs/client/Router'
import Properties from 'ninejs/core/ext/Properties'
import { default as setText, emptyNode } from 'ninejs/ui/utils/setText'
import append from 'ninejs/ui/utils/append'
import { permissions, getAdminTicket, saveTicket } from '../services/operations'
import Editor from "ninejs/ui/Editor";

export interface AdminTicketArgs extends WidgetArgs {
    router: Router;
}

class AdminTicket extends Widget {
    grid: any;
    router: Router;
    ticket: Properties;
    permissionsNode: HTMLElement;
    statusSelect: Editor;
    onUpdatedSkin () {
        super.onUpdatedSkin();
        let statusList: any = {
            todo: 'To do',
            inProgress: 'In Progress',
            done: 'Done'
        };
        this.statusSelect.set('options', Object.keys(statusList).map ((key: string) => {
            return {
                key: key,
                label: statusList[key]
            }
        }));
        this.statusSelect.set('value', this.ticket.get('status'));
    }
    load (key: string) {
        let ticket = getAdminTicket(key);
        return all([this.show(), ticket]).then(([domNode, _ticket]) => {
            let ticket: Ticket = _ticket;
            this.ticket.mixinRecursive(ticket);
            return ticket;
        });
    }
    newButtonClicked () {
        this.router.go('/admin/tickets/new');
    }
    cancelButtonClicked () {
        this.router.go('/admin/tickets');
    }
    saveButtonClicked () {
        let val = Properties.getObject(this.ticket);
        let ticket: Ticket = (() => {
            let r: any = {};
            r._id = val._id;
            r.title = val.title;
            r.description = val.description;
            r.projectName = val.projectName;
            r.status = val.status;


            return r;
        })();

        saveTicket(ticket).then(() => {
            this.router.go('/admin/tickets');
        });
    }
    constructor (args: AdminTicketArgs) {
        this.ticket = new Properties({

        });
        super(args);
    }
}
AdminTicket.prototype.skin = defaultSkin;

export default AdminTicket