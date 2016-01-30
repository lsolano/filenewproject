(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "alertify/css/alertify.ncss", "alertify/css/themes/bootstrap.ncss", "alertify/alertify"], factory);
    }
})(function (require, exports, alertifyCss, alertifyTheme, alertify) {
    'use strict';
    [alertifyCss, alertifyTheme].forEach(function (item) {
        item.enable();
    });
    function nullFunction() {
    }
    function confirm(msg, accept, cancel) {
        return alertify.confirm(msg, accept, cancel || nullFunction);
    }
    exports.confirm = confirm;
    function alert(title, msg, accept) {
        return alertify.alert(title, msg, accept || nullFunction);
    }
    exports.alert = alert;
    function message(msg, accept) {
        return alertify.message(msg, accept || nullFunction);
    }
    exports.message = message;
});
//# sourceMappingURL=alertify.js.map