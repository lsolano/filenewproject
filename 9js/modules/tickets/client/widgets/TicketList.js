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
        define(["require", "exports", 'ninejs/ui/Widget', './skin/TicketList', '../services/operations', './SmallTicket', 'ninejs/ui/utils/setText'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Widget_1 = require('ninejs/ui/Widget');
    var TicketList_1 = require('./skin/TicketList');
    var operations_1 = require('../services/operations');
    var SmallTicket_1 = require('./SmallTicket');
    var setText_1 = require('ninejs/ui/utils/setText');
    var TicketList = (function (_super) {
        __extends(TicketList, _super);
        function TicketList(args) {
            _super.call(this, args);
        }
        TicketList.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
        };
        TicketList.prototype.refresh = function () {
            var _this = this;
            return operations_1.ticketList().then(function (tickets) {
                setText_1.emptyNode(_this.todoTicketsNode);
                setText_1.emptyNode(_this.inProgressTicketsNode);
                setText_1.emptyNode(_this.doneTicketsNode);
                tickets.forEach(function (ticket) {
                    var small = new SmallTicket_1.default({ ticket: ticket });
                    if (ticket.status === 'done') {
                        small.show(_this.doneTicketsNode);
                    }
                    else if (ticket.status === 'todo') {
                        small.show(_this.todoTicketsNode);
                    }
                    else if (ticket.status === 'inProgress') {
                        small.show(_this.inProgressTicketsNode);
                    }
                });
            });
        };
        return TicketList;
    })(Widget_1.Widget);
    TicketList.prototype.skin = TicketList_1.default;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TicketList;
});
//# sourceMappingURL=TicketList.js.map