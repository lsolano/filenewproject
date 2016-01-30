import Auth from 'ninejs-auth-module/client/Auth';
import { MainContainer } from 'ninejs-container-module/client';
import { Container } from 'ninejs/modules/client/container';
import { Router } from 'ninejs/client/router';
declare class TicketsClient {
    container: MainContainer;
    containerUnit: Container;
    config: any;
    auth: Auth;
    router: Router;
    constructor(config: any, auth: Auth, container: MainContainer, containerUnit: Container, router: Router);
    init(): void;
}
export default TicketsClient;
