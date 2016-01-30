(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs/core/deferredUtils', 'ninejs-store/couchdb/couchUtils'], factory);
    }
})(function (require, exports) {
    'use strict';
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var couchUtils_1 = require('ninejs-store/couchdb/couchUtils');
    let emit;
    let documentName = 'tickets';
    function getUserDesignDocument(config) {
        return {
            '_id': '_design/' + documentName,
            'language': 'javascript',
            'views': {
                'byProject': {
                    'map': function (doc) {
                        if (doc.type === 'ticket') {
                            emit(doc.projectName, null);
                        }
                    }.toString()
                },
                'all': {
                    'map': function (doc) {
                        if (doc.type === 'ticket') {
                            emit(doc._id, null);
                        }
                    }.toString()
                }
            }
        };
    }
    function differ(existing, data) {
        if ((existing._id === data._id) && (existing.language === data.language)) {
            return Object.keys(data.views).some(function (viewKey) {
                var existingView = existing.views[viewKey], dataView = data.views[viewKey];
                if (!existingView) {
                    return true;
                }
                return Object.keys(dataView).some(function (propKey) {
                    return dataView[propKey] !== existingView[propKey];
                });
            });
        }
        else {
            return false;
        }
    }
    function checkDb(db, log, config) {
        var userDefer = deferredUtils_1.defer(), config = config || {};
        let user = getUserDesignDocument(config);
        db.get('_design/' + documentName, function (err, data) {
            if (err) {
                log.info('Attempting to reconstruct _design/' + documentName);
                couchUtils_1.mergeWithoutConflict(db, '_design/' + documentName, user, function (err) {
                    if (err) {
                        log.error(err);
                        userDefer.reject(err);
                    }
                    else {
                        userDefer.resolve(true);
                    }
                });
            }
            else {
                if (differ(data, user)) {
                    log.info('Updating _design/' + documentName);
                    couchUtils_1.mergeWithoutConflict(db, '_design/' + documentName, couchUtils_1.merge({}, data, user), function (err) {
                        if (err) {
                            userDefer.reject(err);
                            log.info(err);
                        }
                        else {
                            userDefer.resolve(true);
                        }
                    });
                }
                else {
                    userDefer.resolve(true);
                }
            }
        });
        return userDefer.promise;
    }
    exports.default = checkDb;
});
//# sourceMappingURL=tickets.js.map