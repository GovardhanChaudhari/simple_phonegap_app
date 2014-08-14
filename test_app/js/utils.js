/* this file is used as module */
var UTILS = (function(module){
	module.doIt = function(resultObject){
		resultObject.prepend(Date() + "</br>");
	};
	
	module.clear = function(resultObject){
		resultObject.html("");
	};
	
	return module;
}(UTILS || {}));