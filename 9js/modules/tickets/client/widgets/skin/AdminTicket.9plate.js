(function (deps, factory) { 
	if (typeof module === 'object' && typeof module.exports === 'object') { 
		var v = factory(require, exports); if (v !== undefined) module.exports = v; 
	} 
	else if (typeof define === 'function' && define.amd) { 
		define(deps, factory); 
	} 
})(['require', 'module', 'ninejs/_nineplate/utils/functions','ninejs/ui/Editor','ninejs/_nineplate/utils/functions'], function (require, module) {
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
node = e(node,'h4',node.ownerDocument);
av = '';
av = av + 'col-xs-11';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Ticket detail: ';
putValue = context['ticket']['title'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
return node;
/* Here ends the live expression */ 

},
    _1,
    _2,
    _3 = 	function (node) {
/* Here starts a live expression with attribute */ 
av = '';
putValue = context['ticket']['_id'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.setAttribute('value',av);
return node;
/* Here ends the live expression */ 

},
    _4,
    _5,
    _6 = require('ninejs/ui/Editor'),
    _7,
    _8 = 	function (node) {
/* Here starts a live expression with attribute */ 
av = '';
putValue = context['ticket']['title'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.set('value',av);
return node;
/* Here ends the live expression */ 

},
    _9,
    _10,
    _11,
    _12 = 	function (node) {
/* Here starts a live expression with attribute */ 
av = '';
putValue = context['ticket']['projectName'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.set('value',av);
return node;
/* Here ends the live expression */ 

},
    _13,
    _14,
    _15,
    _16 = 	function (node) {
/* Here starts a live expression with attribute */ 
av = '';
putValue = context['ticket']['description'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.set('value',av);
return node;
/* Here ends the live expression */ 

},
    _17,
    _18,
    _19,
    _20 = 	function (node) {
/* Here starts a live expression with attribute */ 
av = '';
putValue = context['ticket']['status'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.set('value',av);
return node;
/* Here ends the live expression */ 

},
    _21,
    _22;
if (_6.default){
	_6 = _6.default;

}
;
if (!document){
	document = window.document;

}
node = document.createElement('div');
nodes.push(node);
av = '';
av = av + 'col-xs-12 panel panel-primary';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-12 panel-heading';
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('title',_2());

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'panel-body col-xs-12';
node.className = av;
nodes.push(node);
node = e(node,'form',node.ownerDocument);
av = '';
av = av + 'form';
node.setAttribute('role',av);
av = '';
av = av + 'form-horizontal form-groups-bordered';
node.className = av;
nodes.push(node);
node = e(node,'input',node.ownerDocument);
av = '';
av = av + 'hidden';
node.setAttribute('type',av);
_4 = _3(node);
/* Add trigger events here */ 
_5 = 	function () {
	var freeze = {},
	    freezeNode = _4,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			_3(freezeNode);
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('_id',_5());

}
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'label',node.ownerDocument);
av = '';
av = av + 'field-1';
node.setAttribute('for',av);
av = '';
av = av + 'col-sm-3 control-label';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Ticket Name';
node = nodes.pop();
nodes.push(node);
_7 = new (_6)();
node = _7;
av = '';
av = av + 'alphanumeric';
node.set('dataType',av);
_9 = _8(node);
/* Add trigger events here */ 
_10 = 	function () {
	var freeze = {},
	    freezeNode = _9,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			_8(freezeNode);
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('title',_10());

}
if (node.watch){
	node.watch('value',(	function (ctxTemp) {
	return 		function (name,old,newv) {
		ctxTemp.set('title',newv);

};

})(ctxTemp));

}
av = '';
av = av + 'col-sm-5';
node.set('class',av);
av = '';
av = av + 'form-control';
node.set('controlClass',av);
av = '';
av = av + 'New Ticket';
node.set('placeholder',av);
if (_7.$njsWidget){
	_7.show(nodes[nodes.length - 1]);
	if (context.registerChildWidget){
		context.registerChildWidget(node);

	}

}
node = node.domNode;
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'label',node.ownerDocument);
av = '';
av = av + 'field-1';
node.setAttribute('for',av);
av = '';
av = av + 'col-sm-3 control-label';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Project Name';
node = nodes.pop();
nodes.push(node);
_11 = new (_6)();
node = _11;
av = '';
av = av + 'alphanumeric';
node.set('dataType',av);
_13 = _12(node);
/* Add trigger events here */ 
_14 = 	function () {
	var freeze = {},
	    freezeNode = _13,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			_12(freezeNode);
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('projectName',_14());

}
if (node.watch){
	node.watch('value',(	function (ctxTemp) {
	return 		function (name,old,newv) {
		ctxTemp.set('projectName',newv);

};

})(ctxTemp));

}
av = '';
av = av + 'col-sm-5';
node.set('class',av);
av = '';
av = av + 'form-control';
node.set('controlClass',av);
av = '';
av = av + 'Nine Tickets';
node.set('placeholder',av);
if (_11.$njsWidget){
	_11.show(nodes[nodes.length - 1]);
	if (context.registerChildWidget){
		context.registerChildWidget(node);

	}

}
node = node.domNode;
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'label',node.ownerDocument);
av = '';
av = av + 'field-2';
node.setAttribute('for',av);
av = '';
av = av + 'col-sm-3 control-label';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Description';
node = nodes.pop();
nodes.push(node);
_15 = new (_6)();
node = _15;
av = '';
av = av + 'alphanumeric';
node.set('dataType',av);
av = '';
av = av + 'col-sm-5';
node.set('class',av);
av = '';
av = av + 'form-control';
node.set('controlClass',av);
av = '';
av = av + 'Description';
node.set('placeholder',av);
_17 = _16(node);
/* Add trigger events here */ 
_18 = 	function () {
	var freeze = {},
	    freezeNode = _17,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			_16(freezeNode);
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('description',_18());

}
if (node.watch){
	node.watch('value',(	function (ctxTemp) {
	return 		function (name,old,newv) {
		ctxTemp.set('description',newv);

};

})(ctxTemp));

}
if (_15.$njsWidget){
	_15.show(nodes[nodes.length - 1]);
	if (context.registerChildWidget){
		context.registerChildWidget(node);

	}

}
node = node.domNode;
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'label',node.ownerDocument);
av = '';
av = av + 'field-3';
node.setAttribute('for',av);
av = '';
av = av + 'col-sm-3 control-label';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Status';
node = nodes.pop();
nodes.push(node);
_19 = new (_6)();
node = _19;
av = '';
av = av + 'list';
node.set('dataType',av);
av = '';
av = av + 'col-sm-5';
node.set('class',av);
av = '';
av = av + 'form-control';
node.set('controlClass',av);
av = '';
av = av + 'Description';
node.set('placeholder',av);
_21 = _20(node);
/* Add trigger events here */ 
_22 = 	function () {
	var freeze = {},
	    freezeNode = _21,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			_20(freezeNode);
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
ctxTemp = ctxTemp['ticket'];
if (ctxTemp.watch){
	ctxTemp.watch('status',_22());

}
if (node.watch){
	node.watch('value',(	function (ctxTemp) {
	return 		function (name,old,newv) {
		ctxTemp.set('status',newv);

};

})(ctxTemp));

}
attachTemp = r['statusSelect'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['statusSelect'] = [attachTemp,node];

	}

} else {
	r['statusSelect'] = node;

}
if (_19.$njsWidget){
	_19.show(nodes[nodes.length - 1]);
	if (context.registerChildWidget){
		context.registerChildWidget(node);

	}

}
node = node.domNode;
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-offset-10 col-xs-2';
node.className = av;
nodes.push(node);
node = e(node,'button',node.ownerDocument);
av = '';
av = av + 'button';
node.setAttribute('type',av);
av = '';
av = av + 'btn btn-info entypo-save aButton';
node.className = av;
node.addEventListener('click',	function () {
	context.saveButtonClicked.apply(context,arguments);

});
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Save';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'sepRight';
node.className = av;
node = nodes.pop();
nodes.push(node);
node = e(node,'button',node.ownerDocument);
av = '';
av = av + 'button';
node.setAttribute('type',av);
av = '';
av = av + 'btn btn-info entypo-save aButton';
node.className = av;
node.addEventListener('click',	function () {
	context.cancelButtonClicked.apply(context,arguments);

});
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Cancel';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
