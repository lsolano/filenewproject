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
        define(["require", "exports", 'ninejs/modules/moduleDefine', './Tickets'], factory);
    }
})(function (require, exports) {
    'use strict';
    var moduleDefine_1 = require('ninejs/modules/moduleDefine');
    var Tickets_1 = require('./Tickets');
    exports.default = moduleDefine_1.define(['ninejs', 'webserver', 'ninejs/auth', 'ninejs/store/couchdb'], (provide) => {
        provide('tickets/web', (config, ninejs, webserver, auth, couchdb) => {
            return new Tickets_1.default(config, ninejs, webserver, auth, couchdb);
        });
    });
});
//# sourceMappingURL=module.js.map