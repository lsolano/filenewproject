import { default as WebServer } from 'ninejs/modules/webserver/WebServer';
import { NineJs, Logger } from 'ninejs/modules/ninejs-server';
import Auth from 'ninejs-auth-module';
import { default as CouchDB, Database } from 'ninejs-store/CouchDB';
declare class Tickets {
    config: any;
    database: Database;
    logger: Logger;
    couchdb: CouchDB;
    constructor(config: any, ninejs: NineJs, webserver: WebServer, auth: Auth, couchdb: CouchDB);
    init(): Promise<any>;
}
export default Tickets;
