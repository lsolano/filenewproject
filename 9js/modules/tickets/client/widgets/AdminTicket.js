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
        define(["require", "exports", 'ninejs/ui/Widget', './skin/AdminTicket', 'ninejs/core/deferredUtils', 'ninejs/core/ext/Properties', '../services/operations'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Widget_1 = require('ninejs/ui/Widget');
    var AdminTicket_1 = require('./skin/AdminTicket');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var Properties_1 = require('ninejs/core/ext/Properties');
    var operations_1 = require('../services/operations');
    var AdminTicket = (function (_super) {
        __extends(AdminTicket, _super);
        function AdminTicket(args) {
            this.ticket = new Properties_1.default({});
            _super.call(this, args);
        }
        AdminTicket.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
            var statusList = {
                todo: 'To do',
                inProgress: 'In Progress',
                done: 'Done'
            };
            this.statusSelect.set('options', Object.keys(statusList).map(function (key) {
                return {
                    key: key,
                    label: statusList[key]
                };
            }));
            this.statusSelect.set('value', this.ticket.get('status'));
        };
        AdminTicket.prototype.load = function (key) {
            var _this = this;
            var ticket = operations_1.getAdminTicket(key);
            return deferredUtils_1.all([this.show(), ticket]).then(function (_a) {
                var domNode = _a[0], _ticket = _a[1];
                var ticket = _ticket;
                _this.ticket.mixinRecursive(ticket);
                return ticket;
            });
        };
        AdminTicket.prototype.newButtonClicked = function () {
            this.router.go('/admin/tickets/new');
        };
        AdminTicket.prototype.cancelButtonClicked = function () {
            this.router.go('/admin/tickets');
        };
        AdminTicket.prototype.saveButtonClicked = function () {
            var _this = this;
            var val = Properties_1.default.getObject(this.ticket);
            var ticket = (function () {
                var r = {};
                r._id = val._id;
                r.title = val.title;
                r.description = val.description;
                r.projectName = val.projectName;
                r.status = val.status;
                return r;
            })();
            operations_1.saveTicket(ticket).then(function () {
                _this.router.go('/admin/tickets');
            });
        };
        return AdminTicket;
    })(Widget_1.Widget);
    AdminTicket.prototype.skin = AdminTicket_1.default;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AdminTicket;
});
//# sourceMappingURL=AdminTicket.js.map