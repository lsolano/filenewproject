define(['ninejs/css', 'ninejs/config'], function(style, config) {
var result = {path:"client/skin/assets/css/wysihtml5-color.css",children:[]};
result.data = ".wysiwyg-color-black {\n  color: black;\n}\n\n.wysiwyg-color-silver {\n  color: silver;\n}\n\n.wysiwyg-color-gray {\n  color: gray;\n}\n\n.wysiwyg-color-white {\n  color: white;\n}\n\n.wysiwyg-color-m" + 
 "aroon {\n  color: maroon;\n}\n\n.wysiwyg-color-red {\n  color: red;\n}\n\n.wysiwyg-color-purple {\n  color: purple;\n}\n\n.wysiwyg-color-fuchsia {\n  color: fuchsia;\n}\n\n.wysiwyg-color-green {\n  co" + 
 "lor: green;\n}\n\n.wysiwyg-color-lime {\n  color: lime;\n}\n\n.wysiwyg-color-olive {\n  color: olive;\n}\n\n.wysiwyg-color-yellow {\n  color: yellow;\n}\n\n.wysiwyg-color-navy {\n  color: navy;\n}\n\n" + 
 ".wysiwyg-color-blue {\n  color: blue;\n}\n\n.wysiwyg-color-teal {\n  color: teal;\n}\n\n.wysiwyg-color-aqua {\n  color: aqua;\n}\n\n.wysiwyg-color-orange {\n  color: orange;\n}"; 
if (config.default.applicationUrl) { result.path = config.default.applicationUrl + result.path; }

return style.style(result);
});