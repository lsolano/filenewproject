/// <amd-dependency path="./TicketView.9plate" />
'use strict';

import Skin from 'ninejs/ui/Skin'

declare var require: any;
let template = require('./TicketView.9plate');

export default new Skin({
    cssList: [],
    template: template
});