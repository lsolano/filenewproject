'use strict';

import { define } from 'ninejs/modules/moduleDefine'
import Module from 'ninejs/modules/Module'
import TicketsClient from './TicketsClient'
import Auth from 'ninejs-auth-module/client/Auth'
import MainContainer from 'ninejs-container-module/client/MainContainer'
import { Container } from 'ninejs/modules/client/container'
import { Router } from 'ninejs/client/router'

export default define(['ninejs/auth', 'ninejs/mainContainer', 'container', 'router'], (provide) => {
    provide('tickets-web', (config: any, auth: Auth, mainContainer: MainContainer, container: Container, router: Router) => {
        return new TicketsClient(config, auth, mainContainer, container, router);
    });
});