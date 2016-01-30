/// <amd-dependency path="./AdminTicket.9plate" />
'use strict';

import Skin from 'ninejs/ui/Skin'

declare var require: any;
let template = require('./AdminTicket.9plate');

export default new Skin({
    cssList: [],
    template: template
});