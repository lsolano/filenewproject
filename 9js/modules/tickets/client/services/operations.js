(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs/request', 'ninejs/config', 'ninejs/core/deferredUtils'], factory);
    }
})(function (require, exports) {
    'use strict';
    var request_1 = require('ninejs/request');
    var config_1 = require('ninejs/config');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    function ticketList() {
        return request_1.get(config_1.default.baseUrl + 'service/tickets');
    }
    exports.ticketList = ticketList;
    function permissions() {
        return request_1.get(config_1.default.baseUrl + 'service/permissions');
    }
    exports.permissions = permissions;
    function getAdminTickets() {
        return request_1.get({ url: config_1.default.baseUrl + "service/admin/tickets", handleAs: 'json' });
    }
    exports.getAdminTickets = getAdminTickets;
    function getAdminTicket(key) {
        if (key === 'new') {
            var p = {
                type: 'ticket',
                _id: '',
                title: '',
                description: '',
                projectName: 'Nine Tickets',
                status: 'todo'
            };
            return deferredUtils_1.resolve(p);
        }
        else {
            return request_1.get({ url: config_1.default.baseUrl + "service/admin/tickets/" + key, handleAs: 'json' });
        }
    }
    exports.getAdminTicket = getAdminTicket;
    function ticket(key) {
        return request_1.get({ url: config_1.default.baseUrl + "service/tickets/" + key, handleAs: 'json' });
    }
    exports.ticket = ticket;
    function saveTicket(ticket) {
        return request_1.post({ url: config_1.default.baseUrl + "service/admin/tickets/" + (ticket._id ? ticket._id : 'new'), handleAs: 'json', data: ticket });
    }
    exports.saveTicket = saveTicket;
    function deleteTicket(key) {
        return request_1.del({ url: config_1.default.baseUrl + "service/admin/tickets/" + key });
    }
    exports.deleteTicket = deleteTicket;
});
//# sourceMappingURL=operations.js.map