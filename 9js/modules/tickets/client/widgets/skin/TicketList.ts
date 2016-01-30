/// <amd-dependency path="./TicketList.9plate" />
'use strict';

import Skin from 'ninejs/ui/Skin'

declare var require: any;
let template = require('./TicketList.9plate');

export default new Skin({
    cssList: [],
    template: template
});