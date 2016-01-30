var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs-store/couchdb/couchUtils', 'ninejs/modules/webserver/Rest'], factory);
    }
})(function (require, exports) {
    'use strict';
    var couchUtils_1 = require('ninejs-store/couchdb/couchUtils');
    var Rest_1 = require('ninejs/modules/webserver/Rest');
    let clone = (source) => {
        return source;
    };
    function getEndpoint(auth, database) {
        let tickets = Rest_1.get({
            route: '/tickets',
            inputMap: () => {
                return void 0;
            }
        }, (_, req, res) => __awaiter(this, void 0, Promise, function* () {
            let user = yield auth.getUser(req.session.username);
            if (user) {
                let tickets = yield couchUtils_1.view(database, 'tickets/all', { map: clone, include_docs: true });
                return tickets;
            }
            else {
                res.status(403).send('Unauthorized');
                return null;
            }
        }));
        tickets.children = [
            Rest_1.get({
                route: '/:key',
                inputMap: (req) => {
                    return req.params.key;
                }
            }, (key, req, res) => __awaiter(this, void 0, Promise, function* () {
                let user = yield auth.getUser(req.session.username);
                if (user) {
                    let tickets = yield couchUtils_1.view(database, 'tickets/all', { key: key, include_docs: true, map: clone });
                    let ticket = tickets[0];
                    if (ticket) {
                        return ticket;
                    }
                    else {
                        res.status(404).send('not found');
                        return null;
                    }
                }
                else {
                    res.status(403).send('Unauthorized');
                    return null;
                }
            })),
        ];
        let r = [
            tickets,
            Rest_1.get({
                route: '/permissions',
                inputMap: () => {
                    return void 0;
                }
            }, (_, req) => __awaiter(this, void 0, Promise, function* () {
                let permissions = (yield auth.permissions()) || [];
                return permissions;
            })),
            Rest_1.get({
                route: '/admin/tickets',
                inputMap: () => {
                    return void 0;
                }
            }, (_, req) => __awaiter(this, void 0, Promise, function* () {
                let user = yield auth.getUser(req.session.username);
                let permissions = user.permissions || [];
                if (permissions.indexOf('administrator') >= 0) {
                    let tickets = yield couchUtils_1.view(database, 'tickets/all', { include_docs: true, map: clone });
                    return tickets;
                }
                else {
                    return [];
                }
            })),
            Rest_1.get({
                route: '/admin/tickets/:key',
                inputMap: (req) => {
                    return req.params.key;
                }
            }, (key, req) => __awaiter(this, void 0, Promise, function* () {
                let user = yield auth.getUser(req.session.username);
                let permissions = user.permissions || [];
                if (permissions.indexOf('administrator') >= 0) {
                    let tickets = yield couchUtils_1.view(database, 'tickets/all', { key: key, include_docs: true, map: clone });
                    return tickets[0];
                }
                else {
                    return null;
                }
            })),
            Rest_1.post({
                route: '/admin/tickets/:key',
                inputMap: (req) => {
                    let r = req.body;
                    if (req.params.key === 'new') {
                        delete r._id;
                    }
                    else {
                        r._id = req.params.key;
                    }
                    return r;
                }
            }, (ticket, req, res) => __awaiter(this, void 0, Promise, function* () {
                let user = yield auth.getUser(req.session.username);
                let permissions = user.permissions || [];
                if (permissions.indexOf('administrator') >= 0) {
                    let id;
                    if (!ticket._id) {
                        delete ticket._id;
                    }
                    else {
                        id = ticket._id;
                    }
                    ticket.type = 'ticket';
                    let resp = yield couchUtils_1.mergeWithoutConflictAsync(database, id, ticket);
                    return resp.id;
                }
                else {
                    res.status(403).send('Unauthorized');
                }
            })),
            Rest_1.del({
                route: '/admin/tickets/:key',
                inputMap: (req) => {
                    return req.params.key;
                }
            }, (key, req, res) => __awaiter(this, void 0, Promise, function* () {
                let user = yield auth.getUser(req.session.username);
                let permissions = user.permissions || [];
                if (permissions.indexOf('administrator') >= 0) {
                    let resp = yield couchUtils_1.removeWithoutConflictAsync(database, key);
                    return resp.id;
                }
                else {
                    res.status(403).send('Unauthorized');
                }
            }))
        ];
        return r;
    }
    exports.default = getEndpoint;
});
//# sourceMappingURL=service.js.map