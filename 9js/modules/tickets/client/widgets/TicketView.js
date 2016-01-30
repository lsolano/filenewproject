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
        define(["require", "exports", 'ninejs/ui/Widget', './skin/TicketView', '../services/operations'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Widget_1 = require('ninejs/ui/Widget');
    var TicketView_1 = require('./skin/TicketView');
    var operations_1 = require('../services/operations');
    var TicketView = (function (_super) {
        __extends(TicketView, _super);
        function TicketView(args) {
            _super.call(this, args);
        }
        TicketView.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
            var domNode = this.domNode;
        };
        TicketView.prototype.load = function (ticketId) {
            var _this = this;
            return operations_1.ticket(ticketId).then(function (ticket) {
                _this.set('currentTicket', ticket);
                _this.set('ticketName', ticket.title);
            });
        };
        return TicketView;
    })(Widget_1.Widget);
    TicketView.prototype.skin = TicketView_1.default;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TicketView;
});
//# sourceMappingURL=TicketView.js.map