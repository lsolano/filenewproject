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
av = av + 'col-xs-12 SmallTicket';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'postit';
node.className = av;
nodes.push(node);
node = e(node,'h4',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = context['ticket']['title'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
node = nodes.pop();
nodes.push(node);
node = e(node,'p',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = context['ticket']['description'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
