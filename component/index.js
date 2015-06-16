var generators = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');


module.exports = generators.Base.extend({

	constructor: function () {
		//that is the FIRST LINE!
		generators.Base.apply(this, arguments);
		 this.option('i18n', {
		    desc: 'Generate the component with the I18n files',
		    type: Boolean
		  });

		 this.option('name', {
		    desc: 'Name for the component',
		    type: String
		  });

		 this.option('function', {
		    desc: 'Name for the function in the component',
		    type: String
		  });
		
		 this.i18n = this.options['i18n'];
		 this.name = _.camelize(this.options['name']);
		 this.function = _.camelize(this.options['function']);

		//defined the template's place
		this.sourceRoot(path.join(__dirname, '../templates'));
		this.validateDefault = function(input) {
	       // Declare function as asynchronous, and save the done callback
	       var done = this.async();
	      // Do async stuff
	      if (input == "") {
	        // Pass the return value in the done callback
	        done("Value is required");
	        return false;
	      }
	      // Pass the return value in the done callback
	      done(true);
	      return true;
	  };

	  this.hasValue = function(value) {
	       return value == undefined || value == "";
	  };

	},

	initializing: function(){
	    this.log("Welcome the Social Generator!");
	},

	prompting: {
		componentName :function () {
			var that = this;
		    var done = this.async();
			var	prompts = [
				{
			      type    : 'input',
			      name    : 'name',
			      message : 'Your component name',
			      validate: this.validateDefault,
			      when: function (answers){
			      	return that.hasValue(that.name);
			      }
			    },
			    {
			      type    : 'input',
			      name    : 'functionName',
			      message : 'Your component function',
			      validate: this.validateDefault,
			      when: function (answers){
			      	return that.hasValue(that.function);
			      }
			    }
			]

		     this.prompt(prompts, function (answers) {
		      this.name = answers.name || this.name;
		      this.functionName = answers.functionName || this.function;
		      done();
		    }.bind(this));
		  }
	},

  	writing: function (){
  		this.log("Init copy...");

		var options = { 
						componentName: this.name,
      		  			functionName: this.functionName 
      		  		};
      	if(this.i18n){
      		this.template("component.js", this.name + '/' + this.name +'_en_US.js',options);
      		this.template("component.js", this.name + '/' + this.name +'_es.js',options);
      		this.template("component.js", this.name + '/' + this.name +'_pt_BR.js',options);	
      	}
  		this.template("component.js", this.name + '/' + this.name +'.js',options);
  		
  	}


});