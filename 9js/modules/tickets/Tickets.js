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
        define(["require", "exports", 'ninejs/core/extend', 'ninejs/modules/webserver/Rest', './design/tickets', 'path', './service'], factory);
    }
})(function (require, exports) {
    'use strict';
    var extend = require('ninejs/core/extend');
    var Rest_1 = require('ninejs/modules/webserver/Rest');
    var tickets_1 = require('./design/tickets');
    var path = require('path');
    var service_1 = require('./service');
    class Tickets {
        constructor(config, ninejs, webserver, auth, couchdb) {
            this.config = config;
            this.logger = ninejs.get('logger');
            this.couchdb = couchdb;
            let connection = this.couchdb.connection(this.config.connectionName);
            this.database = connection.database(this.config.dbName);
            let mainEndpoint = Rest_1.get({
                route: '/service',
                inputMap: () => { }
            }, (_, req, res) => {
                res.status(400);
                return void 0;
            });
            service_1.default(auth, this.database).forEach((endpoint) => {
                mainEndpoint.children.push(endpoint);
            });
            webserver.add(mainEndpoint);
            webserver.clientSetup((utils) => {
                utils.addAmdPath('tickets/client', path.resolve(__dirname, 'client'));
                utils.addModule('tickets/client/module', {
                    'tickets': {}
                });
                var authConfig = utils.getUnit('ninejs/auth');
                extend.mixinRecursive(authConfig, { skin: { login: 'tickets/client/skin/LoginScreen' } });
                var singlePageContainer = utils.getUnit('singlePageContainer');
                extend.mixinRecursive(singlePageContainer, { frameMode: 'flexFrame' });
                utils.addAmdPath('dgrid', path.resolve(__dirname, 'lib/dgrid'));
                utils.addAmdPath('dojo', path.resolve(__dirname, 'lib/dojo'));
                utils.addAmdPath('dstore', path.resolve(__dirname, 'lib/dstore'));
                utils.addAmdPath('alertify', path.resolve(__dirname, 'lib/alertify/build'));
                utils.addAmdPath('bootstrap', path.resolve(__dirname, 'lib/bootstrap/dist'));
                utils.on('config', (cfg) => {
                    if (!cfg.ninejs.core) {
                        cfg.ninejs.core = {};
                    }
                    if (!cfg.ninejs.core.deferredUtils) {
                        cfg.ninejs.core.deferredUtils = {};
                    }
                    cfg.ninejs.core.deferredUtils.skipNativePromise = false;
                    cfg.shim = cfg.shim || {};
                    cfg.shim['bootstrap/js/bootstrap'] = {
                        deps: ['jQuery/jquery'],
                        exports: '$'
                    };
                });
            });
        }
        init() {
            return __awaiter(this, void 0, Promise, function* () {
                return yield tickets_1.default(this.database, this.logger, this.config);
            });
        }
    }
    exports.default = Tickets;
});
//# sourceMappingURL=Tickets.js.map