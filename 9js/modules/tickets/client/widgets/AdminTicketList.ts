'use strict';

import { Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './skin/AdminTicketList'
import { default as Grid, Memory, MemoryInstance } from './Grid'
import { get } from 'ninejs/request'
import config from 'ninejs/config'
import { Ticket } from '../common'
import { Router } from 'ninejs/client/Router'
import { default as coreOn } from 'ninejs/core/on'
import { deleteTicket } from '../services/operations'
import { confirm } from '../services/alertify'

export interface AdminTicketListArgs extends WidgetArgs {
    router: Router;
}

let rowRenderer = defaultSkin.get('rowRenderer');

class AdminTicketList extends Widget {
    grid: any;
    collection: MemoryInstance;
    router: Router;
    onUpdatedSkin () {
        super.onUpdatedSkin();

    }
    refresh () {
        return get({ url: `${config.baseUrl}service/admin/tickets`, handleAs: 'json' }).then((tickets: Ticket[]) => {
            this.collection.setData(tickets);
            this.grid.refresh();
            return tickets;
        });
    }
    newButtonClicked () {
        this.router.go('/admin/tickets/new');
    }
    constructor (args: AdminTicketListArgs) {
        super(args);
        this.collection = new Memory({
            idProperty: '_id'
        });
        this.grid = new Grid({
            collection: this.collection,
            columns: {
                title: 'Title',
                status: 'Status',
                action: {
                    renderCell: (row: Ticket, _: any, node: HTMLElement) => {
                        let { editButton: editBtn, removeButton: removeBtn, domNode: domNode } = rowRenderer({});
                        coreOn(editBtn, 'click', () => {
                            this.router.go(`/admin/tickets/${row._id}`);
                        });
                        coreOn(removeBtn, 'click', () => {
                            confirm('Are you sure you want to remove this ticket?', () => {
                                deleteTicket(row._id).then(() => {
                                    this.router.go('/admin/tickets');
                                });
                            });
                        });
                        node.appendChild(domNode);
                    }
                }
                // ...
            }
        });
        this.grid.startup();
    }
}
AdminTicketList.prototype.skin = defaultSkin;

export default AdminTicketList