(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "dgrid/OnDemandGrid", "dstore/Memory", "dojo/_base/declare", "dgrid/css/dgrid.ncss"], factory);
    }
})(function (require, exports, Dgrid, DstoreMemory, declare, dgridStyle) {
    'use strict';
    dgridStyle.enable();
    exports.Memory = DstoreMemory;
    var Grid = declare([Dgrid], {});
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Grid;
});
//# sourceMappingURL=Grid.js.map