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
av = av + 'login-container login-page login-form-fall login-form-fall-init ticketsLoginScreen';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-header login-caret';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-content';
node.className = av;
nodes.push(node);
node = e(node,'h1',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Nine Tickets';
node = nodes.pop();
nodes.push(node);
node = e(node,'a',node.ownerDocument);
av = '';
av = av + 'index.html';
node.setAttribute('href',av);
av = '';
av = av + 'logo';
node.className = av;
nodes.push(node);
node = e(node,'img',node.ownerDocument);
av = '';
putValue = context['skin']['config']['baseUrl'];
if (av !== ''){
	av = av + ((putValue) || '');

} else {
	av = ((putValue) || '');

}
av = av + 'js/tickets/client/skin/images/logo.png';
node.setAttribute('src',av);
av = '';
av = av + '120';
node.setAttribute('width',av);
av = '';
node.setAttribute('alt',av);
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'p',node.ownerDocument);
av = '';
av = av + 'description';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Dear user, log in to access';
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-progressbar-indicator';
node.className = av;
nodes.push(node);
node = e(node,'h3',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + '43%';
node = nodes.pop();
nodes.push(node);
node = e(node,'span',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'logging in...';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-progressbar';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-form';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-content';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-login-error';
node.className = av;
nodes.push(node);
node = e(node,'h3',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Invalid login';
node = nodes.pop();
nodes.push(node);
node = e(node,'p',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Enter';
nodes.push(node);
node = e(node,'strong',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'demo';
node = nodes.pop();
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + '/';
nodes.push(node);
node = e(node,'strong',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'demo';
node = nodes.pop();
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'as login and password.';
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'form',node.ownerDocument);
av = '';
av = av + 'post';
node.setAttribute('method',av);
av = '';
av = av + 'form';
node.setAttribute('role',av);
av = '';
av = av + 'form_login';
node.setAttribute('id',av);
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'input-group';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'input-group-addon';
node.className = av;
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-user';
node.className = av;
attachTemp = r['userNameIcon'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['userNameIcon'] = [attachTemp,node];

	}

} else {
	r['userNameIcon'] = node;

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'input',node.ownerDocument);
av = '';
av = av + 'text';
node.setAttribute('type',av);
av = '';
av = av + 'form-control';
node.className = av;
av = '';
av = av + 'username';
node.setAttribute('name',av);
av = '';
av = av + 'username';
node.setAttribute('id',av);
av = '';
av = av + 'Username';
node.setAttribute('placeholder',av);
av = '';
av = av + 'off';
node.setAttribute('autocomplete',av);
attachTemp = r['userNameText'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['userNameText'] = [attachTemp,node];

	}

} else {
	r['userNameText'] = node;

}
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'input-group';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'input-group-addon';
node.className = av;
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-key';
node.className = av;
attachTemp = r['passwordIcon'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['passwordIcon'] = [attachTemp,node];

	}

} else {
	r['passwordIcon'] = node;

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'input',node.ownerDocument);
av = '';
av = av + 'password';
node.setAttribute('type',av);
av = '';
av = av + 'form-control';
node.className = av;
av = '';
av = av + 'password';
node.setAttribute('name',av);
av = '';
av = av + 'password';
node.setAttribute('id',av);
av = '';
av = av + 'Password';
node.setAttribute('placeholder',av);
av = '';
av = av + 'off';
node.setAttribute('autocomplete',av);
attachTemp = r['passwordText'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['passwordText'] = [attachTemp,node];

	}

} else {
	r['passwordText'] = node;

}
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'form-group';
node.className = av;
nodes.push(node);
node = e(node,'button',node.ownerDocument);
av = '';
av = av + 'button';
node.setAttribute('type',av);
av = '';
av = av + 'btn btn-primary btn-block btn-login';
node.className = av;
attachTemp = r['loginButton'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['loginButton'] = [attachTemp,node];

	}

} else {
	r['loginButton'] = node;

}
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-login';
node.className = av;
attachTemp = r['loginIcon'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['loginIcon'] = [attachTemp,node];

	}

} else {
	r['loginIcon'] = node;

}
node = nodes.pop();
nodes.push(node);
node = e(node,'span',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Login';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'login-bottom-links';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
attachTemp = r['forgotPasswordButton'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['forgotPasswordButton'] = [attachTemp,node];

	}

} else {
	r['forgotPasswordButton'] = node;

}
av = '';
av = av + 'extra-forgot-password.html';
node.setAttribute('href',av);
av = '';
av = av + 'link hide';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Forgot your password?';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
