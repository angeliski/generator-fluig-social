var generators = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');


module.exports = generators.Base.extend({

	constructor: function () {
		//that is the FIRST LINE!
		generators.Base.apply(this, arguments);
	},

	initializing: function(){
	    this.log("Welcome the Social Generator!");
	},

	prompting: {
	},

  	writing: function (){
  	}


});