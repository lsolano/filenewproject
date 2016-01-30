(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./LoginScreen.ncss", "./LoginScreen.9plate", "./assets/css/font-icons/entypo/css/entypo.ncss", "ninejs/ui/bootstrap/less/bootstrap.ncss", "./assets/css/neon-core.ncss", "./assets/css/neon-theme.ncss", "./assets/css/neon-forms.ncss", "./assets/css/custom.ncss", 'ninejs/ui/Skin', 'ninejs/ui/utils/setClass', 'ninejs/core/deferredUtils', 'ninejs/core/on', 'ninejs/ui/bootstrap/bootstrap', 'ninejs/config'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Skin_1 = require('ninejs/ui/Skin');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var on_1 = require('ninejs/core/on');
    var bootstrap_1 = require('ninejs/ui/bootstrap/bootstrap');
    var config_1 = require('ninejs/config');
    var css = require('./LoginScreen.ncss');
    var template = require('./LoginScreen.9plate');
    [
        require('ninejs/ui/bootstrap/less/bootstrap.ncss'),
        require('./assets/css/font-icons/entypo/css/entypo.ncss'),
        require('./assets/css/neon-core.ncss'),
        require('./assets/css/neon-theme.ncss'),
        require('./assets/css/neon-forms.ncss'),
        require('./assets/css/custom.ncss')
    ].forEach(function (style) {
        style.enable();
    });
    var validateInput = function (isValid) {
        var valid = isValid && this.userNameText.value && this.passwordText.value;
        setClass_1.default(this.loginIcon, '!valid', '!invalid');
        if (valid) {
            setClass_1.default(this.loginIcon, 'valid');
        }
        else {
            setClass_1.default(this.loginIcon, 'invalid');
        }
    };
    var validateUserName = function () {
        validateInput.call(this);
    };
    var validateUserNameBlur = function () {
        var deferred = deferredUtils_1.defer(), value = this.userNameText.value, self = this;
        if (this.userNameValidation) {
            deferredUtils_1.when(this.userNameValidation(value), function (result) {
                deferred.resolve(result);
            });
        }
        else {
            deferred.resolve(true);
        }
        return deferredUtils_1.when(deferred.promise, function (valid) {
            setClass_1.default(self.userNameIcon, '!valid', '!invalid');
            if (valid) {
                setClass_1.default(self.userNameIcon, 'valid');
            }
            else {
                setClass_1.default(self.userNameIcon, 'invalid');
            }
            return valid;
        });
    };
    var validatePassword = function () {
        var message = '';
        if (this.passwordValidation) {
            message = this.passwordValidation(this.passwordText.value);
        }
        setClass_1.default(this.passwordIcon, '!valid', '!invalid');
        if (!message) {
            setClass_1.default(this.passwordIcon, 'valid');
        }
        else {
            setClass_1.default(this.passwordIcon, 'invalid');
        }
        validateInput.call(this, !message);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Skin_1.default({
        cssList: [css],
        template: template,
        config: config_1.default,
        updated: function (control) {
            bootstrap_1.default.enable('css');
            control.own(on_1.default(control.userNameText, 'keyup', function () {
                control.currentSkin.validateUserName.call(control);
            }), on_1.default(control.userNameText, 'blur', function () {
                control.currentSkin.validateUserNameBlur.call(control);
            }), on_1.default(control.passwordText, 'keyup', function () {
                control.currentSkin.validatePassword.call(control);
            }));
        },
        validateInput: validateInput,
        validateUserName: validateUserName,
        validateUserNameBlur: validateUserNameBlur,
        validatePassword: validatePassword,
        alert: function (msg) {
            window.alert(msg);
        }
    });
});
//# sourceMappingURL=LoginScreen.js.map