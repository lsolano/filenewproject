'use strict';

import * as extend from 'ninejs/core/extend'
import { default as WebServer, Request, Response } from 'ninejs/modules/webserver/WebServer'
import { get, post } from 'ninejs/modules/webserver/Rest'
import { NineJs, Logger } from 'ninejs/modules/ninejs-server'
import designCheck from './design/tickets'
import Auth from 'ninejs-auth-module'
import { default as CouchDB, Database } from 'ninejs-store/CouchDB'
import path = require('path')
import endpoints from './service'

class Tickets {
    config: any;
    database: Database;
    logger: Logger;
    couchdb: CouchDB;
    constructor (config: any, ninejs: NineJs, webserver: WebServer, auth: Auth, couchdb: CouchDB) {
        this.config = config;
        this.logger = ninejs.get('logger');
        this.couchdb = couchdb;
        let connection = this.couchdb.connection(this.config.connectionName);
        this.database = connection.database(this.config.dbName);
        let mainEndpoint = get<void, any>({
            route: '/service',
            inputMap: () => {}
        }, (_: void, req: Request, res: Response) => {
            res.status(400);
            return void 0;
        });
        endpoints(auth, this.database).forEach((endpoint) => {
            mainEndpoint.children.push(endpoint);
        });

        webserver.add(mainEndpoint);


        webserver.clientSetup((utils) => {
            utils.addAmdPath('tickets/client', path.resolve(__dirname, 'client'));
            utils.addModule('tickets/client/module', {
                'tickets': {

                }
            });
            var authConfig = utils.getUnit('ninejs/auth');
            extend.mixinRecursive(authConfig, { skin: { login: 'tickets/client/skin/LoginScreen' }});
            var singlePageContainer = utils.getUnit('singlePageContainer');
            extend.mixinRecursive(singlePageContainer, { frameMode: 'flexFrame' });

            // External libraries
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


                //I need this to be able to use bootstrap's features such as Modals
                cfg.shim = cfg.shim || {};
                cfg.shim['bootstrap/js/bootstrap'] = {
                    deps: ['jQuery/jquery'],
                    exports: '$'
                };
            });
        });
    }
    async init () {
        return await designCheck(this.database, this.logger, this.config);
    }
}

export default Tickets