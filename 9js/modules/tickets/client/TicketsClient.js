(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./skin/common.ncss", "bootstrap/js/bootstrap", 'ninejs/ui/utils/setText', './widgets/TicketView', './widgets/TicketList', './widgets/AdminTicketList', './widgets/AdminTicket', 'ninejs/ui/utils/setClass'], factory);
    }
})(function (require, exports) {
    'use strict';
    var setText_1 = require('ninejs/ui/utils/setText');
    var TicketView_1 = require('./widgets/TicketView');
    var TicketList_1 = require('./widgets/TicketList');
    var AdminTicketList_1 = require('./widgets/AdminTicketList');
    var AdminTicket_1 = require('./widgets/AdminTicket');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    setTimeout(function () {
        [
            require('./skin/common.ncss')
        ].forEach(function (style) {
            style.enable();
        });
    }, 500);
    var TicketsClient = (function () {
        function TicketsClient(config, auth, container, containerUnit, router) {
            this.container = container;
            this.containerUnit = containerUnit;
            this.config = config;
            this.auth = auth;
            this.router = router;
        }
        TicketsClient.prototype.init = function () {
            var _this = this;
            setClass_1.default(window.document.body, 'flexFrame');
            var footer = this.containerUnit.getContainer('footer');
            setText_1.emptyNode(footer);
            var ticketView = new TicketView_1.default({});
            var ticketList = new TicketList_1.default({
                router: this.router
            });
            var adminTicketList = new AdminTicketList_1.default({ router: this.router });
            var adminTicket = new AdminTicket_1.default({ router: this.router });
            this.auth.register('/', function () {
                _this.container.activate();
                return ticketList.show().then(function () {
                    return ticketList.refresh().then(function () {
                        _this.container.set('content', ticketList);
                    });
                });
            }, [], {});
            this.auth.register('/admin/tickets', function () {
                _this.container.activate();
                return adminTicketList.show().then(function () {
                    return adminTicketList.refresh().then(function () {
                        _this.container.set('content', adminTicketList);
                    });
                });
            }, ['administrator'], {
                emitArgs: {
                    key: 'manageTickets'
                }
            });
            this.auth.register('/admin/tickets/:ticketId', function (e) {
                _this.container.activate();
                return adminTicket.load(e.ticketId).then(function () {
                    adminTicket.show().then(function () {
                        _this.container.set('content', adminTicket);
                    });
                });
            }, ['administrator'], {
                emitArgs: {
                    key: 'manageTickets'
                }
            });
            this.auth.register('/tickets/:ticketId', function (e) {
                _this.container.activate();
                return ticketView.load(e.ticketId).then(function () {
                    return ticketView.show().then(function () {
                        _this.container.set('content', ticketView);
                    });
                });
            }, [], {});
            this.container.addMenuItem('mainMenu', {
                text: 'Manage Tickets',
                key: 'manageTickets',
                icon: 'entypo-ticket',
                action: function (e) {
                    _this.router.go('/admin/tickets');
                }
            });
        };
        return TicketsClient;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TicketsClient;
});
//# sourceMappingURL=TicketsClient.js.map