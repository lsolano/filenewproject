var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs/ui/Widget', './skin/AdminTicketList', './Grid', 'ninejs/request', 'ninejs/config', 'ninejs/core/on', '../services/operations', '../services/alertify'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Widget_1 = require('ninejs/ui/Widget');
    var AdminTicketList_1 = require('./skin/AdminTicketList');
    var Grid_1 = require('./Grid');
    var request_1 = require('ninejs/request');
    var config_1 = require('ninejs/config');
    var on_1 = require('ninejs/core/on');
    var operations_1 = require('../services/operations');
    var alertify_1 = require('../services/alertify');
    var rowRenderer = AdminTicketList_1.default.get('rowRenderer');
    var AdminTicketList = (function (_super) {
        __extends(AdminTicketList, _super);
        function AdminTicketList(args) {
            var _this = this;
            _super.call(this, args);
            this.collection = new Grid_1.Memory({
                idProperty: '_id'
            });
            this.grid = new Grid_1.default({
                collection: this.collection,
                columns: {
                    title: 'Title',
                    status: 'Status',
                    action: {
                        renderCell: function (row, _, node) {
                            var _a = rowRenderer({}), editBtn = _a.editButton, removeBtn = _a.removeButton, domNode = _a.domNode;
                            on_1.default(editBtn, 'click', function () {
                                _this.router.go("/admin/tickets/" + row._id);
                            });
                            on_1.default(removeBtn, 'click', function () {
                                alertify_1.confirm('Are you sure you want to remove this ticket?', function () {
                                    operations_1.deleteTicket(row._id).then(function () {
                                        _this.router.go('/admin/tickets');
                                    });
                                });
                            });
                            node.appendChild(domNode);
                        }
                    }
                }
            });
            this.grid.startup();
        }
        AdminTicketList.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
        };
        AdminTicketList.prototype.refresh = function () {
            var _this = this;
            return request_1.get({ url: config_1.default.baseUrl + "service/admin/tickets", handleAs: 'json' }).then(function (tickets) {
                _this.collection.setData(tickets);
                _this.grid.refresh();
                return tickets;
            });
        };
        AdminTicketList.prototype.newButtonClicked = function () {
            this.router.go('/admin/tickets/new');
        };
        return AdminTicketList;
    })(Widget_1.Widget);
    AdminTicketList.prototype.skin = AdminTicketList_1.default;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AdminTicketList;
});
//# sourceMappingURL=AdminTicketList.js.map