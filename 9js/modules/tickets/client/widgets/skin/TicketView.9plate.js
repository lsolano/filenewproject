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
    v,
    _0 = 	function () {
/* Here starts a live expression */ 
node = e(node,'h3',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Ticket: ';
putValue = context['ticketName'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
return node;
/* Here ends the live expression */ 

},
    _1,
    _2,
    _3 = 	function () {
/* Here starts a live expression */ 
node = e(node,'h5',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = context['description'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
return node;
/* Here ends the live expression */ 

},
    _4,
    _5;
if (!document){
	document = window.document;

}
node = document.createElement('div');
nodes.push(node);
av = '';
av = av + 'col-xs-12 ProjectView';
node.className = av;
nodes.push(node);
_1 = _0();
/* Add trigger events here */ 
_2 = 	function () {
	var freeze = {},
	    freezeNode = _1,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    t,
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			t = _0();
			freezeNode.parentNode.replaceChild(t,freezeNode);
			freezeNode = t;
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				context[p] = temps[p];

			}
			}
		}

};
	return wfn;

};
ctxTemp = context;
if (ctxTemp.watch){
	ctxTemp.watch('ticketName',_2());

}
node = nodes.pop();
nodes.push(node);
_4 = _3();
/* Add trigger events here */ 
_5 = 	function () {
	var freeze = {},
	    freezeNode = _4,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    t,
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			t = _3();
			freezeNode.parentNode.replaceChild(t,freezeNode);
			freezeNode = t;
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				context[p] = temps[p];

			}
			}
		}

};
	return wfn;

};
ctxTemp = context;
if (ctxTemp.watch){
	ctxTemp.watch('description',_5());

}
node = nodes.pop();
nodes.push(node);
node = e(node,'br',node.ownerDocument);
node = nodes.pop();
nodes.push(node);
node = e(node,'br',node.ownerDocument);
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
