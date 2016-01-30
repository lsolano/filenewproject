define(['ninejs/css', 'ninejs/config'], function(style, config) {
var result = {path:"client/skin/assets/css/ie.css",children:[]};
result.data = ""; 
if (config.default.applicationUrl) { result.path = config.default.applicationUrl + result.path; }

return style.style(result);
});