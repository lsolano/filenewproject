(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs/modules/moduleDefine', './TicketsClient'], factory);
    }
})(function (require, exports) {
    'use strict';
    var moduleDefine_1 = require('ninejs/modules/moduleDefine');
    var TicketsClient_1 = require('./TicketsClient');
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = moduleDefine_1.define(['ninejs/auth', 'ninejs/mainContainer', 'container', 'router'], function (provide) {
        provide('tickets-web', function (config, auth, mainContainer, container, router) {
            return new TicketsClient_1.default(config, auth, mainContainer, container, router);
        });
    });
});
//# sourceMappingURL=module.js.map