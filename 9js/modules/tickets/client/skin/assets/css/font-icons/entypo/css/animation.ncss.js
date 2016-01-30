define(['ninejs/css', 'ninejs/config'], function(style, config) {
var result = {path:"client/skin/assets/css/font-icons/entypo/css/animation.css",children:[]};
result.data = "/*\n   Animation example, for spinners\n*/\n.animate-spin {\n  -moz-animation: spin 2s infinite linear;\n  -o-animation: spin 2s infinite linear;\n  -webkit-animation: spin 2s infinite linear;\n  anim" + 
 "ation: spin 2s infinite linear;\n  display: inline-block;\n}\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n" + 
 "    transform: rotate(0deg);\n  }\n\n  100% {\n    -moz-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@" + 
 "-webkit-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -moz-tran" + 
 "sform: rotate(359deg);\n    -o-transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@-o-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg" + 
 ");\n    -o-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -moz-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n    -w" + 
 "ebkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@-ms-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -webkit-transform: rota" + 
 "te(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -moz-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);" + 
 "\n  }\n}\n@keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -moz-t" + 
 "ransform: rotate(359deg);\n    -o-transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n"; 
if (config.default.applicationUrl) { result.path = config.default.applicationUrl + result.path; }

return style.style(result);
});