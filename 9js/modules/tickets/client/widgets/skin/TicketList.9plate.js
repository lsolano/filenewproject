(function (deps, factory) { 
	if (typeof module === 'object' && typeof module.exports === 'object') { 
		var v = factory(require, exports); if (v !== undefined) module.exports = v; 
	} 
	else if (typeof define === 'function' && define.amd) { 
		define(deps, factory); 
	} 
})(['require', 'module', 'ninejs/_nineplate/utils/functions','ninejs/_nineplate/utils/functions'], function (require, module) {
/* jshint -W074 */
/* globals window: true */
'use strict';
var r = function anonymous(context,document
/**/) {
'use strict';
var fn = require('ninejs/_nineplate/utils/functions'),
    r = {},
    nodes = [],
    node,
    att,
    txn,
    attachTemp,
    putValue,
    x,
    ctxTemp,
    y,
    e = (fn.tst()?fn.e:fn.ae),
    ens = (fn.tst()?fn.ens:fn.aens),
    aens = fn.aens,
    a = fn.a,
    t = fn.t,
    av,
    result,
    v;
if (!document){
	document = window.document;

}
node = document.createElement('div');
nodes.push(node);
av = '';
av = av + 'col-xs-12 row';
node.className = av;
nodes.push(node);
node = e(node,'h1',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Tickets Dashboard:';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-12';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-4 lines';
node.className = av;
nodes.push(node);
node = e(node,'h4',node.ownerDocument);
av = '';
av = av + 'column';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'To do';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
attachTemp = r['todoTicketsNode'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['todoTicketsNode'] = [attachTemp,node];

	}

} else {
	r['todoTicketsNode'] = node;

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-4 lines';
node.className = av;
nodes.push(node);
node = e(node,'h4',node.ownerDocument);
av = '';
av = av + 'column';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'In Progress';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
attachTemp = r['inProgressTicketsNode'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['inProgressTicketsNode'] = [attachTemp,node];

	}

} else {
	r['inProgressTicketsNode'] = node;

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-4 lines';
node.className = av;
nodes.push(node);
node = e(node,'h4',node.ownerDocument);
av = '';
av = av + 'column';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Done';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
attachTemp = r['doneTicketsNode'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['doneTicketsNode'] = [attachTemp,node];

	}

} else {
	r['doneTicketsNode'] = node;

}
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
