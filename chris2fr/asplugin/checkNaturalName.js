/*\
title: checkNaturalName
type: application/javascript
module-type: macro
tags: HowWowNow/AsPlugout

Macro to output tiddlers matching a filter to Plugin

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "checkNaturalName";

exports.params = [
	{name: "naturalName"}
];

/*
Run the macro
*/
exports.run = function(naturalName) {
  naturalName = "" + naturalName;
	return naturalName.split('\n')[0];
};

})();
