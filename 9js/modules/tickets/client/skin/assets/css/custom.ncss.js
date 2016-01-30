define(['ninejs/css', 'ninejs/config'], function(style, config) {
var result = {path:"client/skin/assets/css/custom.css",children:[]};
result.data = "/**\n *\n * Apply Here your Custom CSS\n *\n*/\n\nbody {\n\t\n}"; 
if (config.default.applicationUrl) { result.path = config.default.applicationUrl + result.path; }

return style.style(result);
});