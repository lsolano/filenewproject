'use strict';
import {Logger} from 'ninejs/modules/ninejs-server';
import {Database} from 'ninejs-store/CouchDB';
import { all, defer, PromiseType } from 'ninejs/core/deferredUtils'
import { mergeWithoutConflict, merge } from 'ninejs-store/couchdb/couchUtils'

let	emit: any; //just to pass linter

let documentName = 'tickets';

function getUserDesignDocument (config: any) {
	return {
		'_id': '_design/' + documentName,
		'language': 'javascript',
		'views': {
			'byProject': {
				'map': function (doc: any) {
					if (doc.type === 'ticket') {
						emit(doc.projectName, null);
					}
				}.toString()
			},
			'all': {
				'map': function (doc: any) {
					if (doc.type === 'ticket') {
						emit(doc._id, null);
					}
				}.toString()
			}
		}
	};
}

function differ(existing: any, data: any) {
	if ((existing._id === data._id) && (existing.language === data.language)) {
		return Object.keys(data.views).some(function(viewKey) {
			var existingView = existing.views[viewKey],
				dataView = data.views[viewKey];
			if (!existingView) {
				return true;
			}
			return Object.keys(dataView).some(function(propKey) {
				return dataView[propKey] !== existingView[propKey];
			});
		});
	} else {
		return false;
	}
}

export default function checkDb(db: Database, log: Logger, config: any) {
	var userDefer = defer(),
		config = config || {};

	let user = getUserDesignDocument (config);

	db.get('_design/' + documentName, function(err: any, data: any) {
		if (err) {
			log.info('Attempting to reconstruct _design/' + documentName);
			mergeWithoutConflict(db, '_design/' + documentName, user, function(err: any) {
				if (err) {
					log.error(err);
					userDefer.reject(err);
				} else {
					userDefer.resolve(true);
				}
			});
		} else {
			if (differ(data, user)) {
				log.info('Updating _design/' + documentName);
				mergeWithoutConflict(db, '_design/' + documentName, merge({}, data, user), function(err: any) {
					if (err) {
						userDefer.reject(err);
						log.info(err);
					} else {
						userDefer.resolve(true);
					}
				});
			} else {
				userDefer.resolve(true);
			}
		}
	});

	return userDefer.promise;
}