(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./AdminTicketList.9plate", "./AdminTicketListRow.9plate", 'ninejs/ui/Skin'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Skin_1 = require('ninejs/ui/Skin');
    var template = require('./AdminTicketList.9plate');
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Skin_1.default({
        cssList: [],
        template: template,
        rowRenderer: require('./AdminTicketListRow.9plate')
    });
});
//# sourceMappingURL=AdminTicketList.js.map