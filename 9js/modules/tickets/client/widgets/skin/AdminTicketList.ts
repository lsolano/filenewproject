/// <amd-dependency path="./AdminTicketList.9plate" />
/// <amd-dependency path="./AdminTicketListRow.9plate" />
'use strict';

import Skin from 'ninejs/ui/Skin'

declare var require: any;
let template = require('./AdminTicketList.9plate');

export default new Skin({
    cssList: [],
    template: template,
    rowRenderer: require('./AdminTicketListRow.9plate')
});