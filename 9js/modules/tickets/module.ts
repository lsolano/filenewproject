'use strict';

import { define } from 'ninejs/modules/moduleDefine'
import Module from 'ninejs/modules/Module'
import { default as WebServer } from 'ninejs/modules/webserver/WebServer'
import { NineJs } from 'ninejs/modules/ninejs-server'
import Tickets from './Tickets'
import Auth from 'ninejs-auth-module'
import CouchDB from 'ninejs-store/CouchDB'

export default define(['ninejs', 'webserver', 'ninejs/auth', 'ninejs/store/couchdb'], (provide) => {
	provide('tickets/web', (config: any, ninejs: NineJs, webserver: WebServer, auth: Auth, couchdb: CouchDB) => {
		return new Tickets(config, ninejs, webserver, auth, couchdb);
	});
});