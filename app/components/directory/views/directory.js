"use strict";
define(["backbone", "models/employeeRecord"],
	function(Backbone, EmployeeRecord) {
		
	var Directory = Backbone.View.extend({
		events : {
			"keyup :input" : "handleInputKeyup",
			"submit" : "handleClickAdd",
			"reset" : "handleClickReset"
		},
		initialize : function() {
			this.scheduleReset();
		},
		handleInputKeyup : function() {
			this.buildAndValidateModel();
		},
		handleClickReset : function() {
			this.scheduleReset();
		},
		handleClickAdd : function(e) {
			e.preventDefault();
			var employee = this.buildAndValidateModel();
			this.collection.create(employee, { wait : true });
			if (!_.contains(this.collection.models, employee))
			{
				return;
			}
			this.$("form").trigger("reset");
		},

		scheduleReset : function() {
			this.$(":text:visible:first").focus();
			setTimeout(this.buildAndValidateModel.bind(this), 0);
		},
		
		buildAndValidateModel : function() {
			var fields = this.$("form").serializeArray();
			
			function compose(obj, field) { obj[field.name] = field.value; return obj; };
			
			var attrs = _.reduce(fields, compose, {});
			
			var model = new EmployeeRecord(attrs);
			//New model instance
			this.$(".error-message").text("");
			
			if(model.isValid()) { return model; };
			
			_.each(model.validationError, this.displayValidationMessage.bind(this));
			return model;
		},

		displayValidationMessage : function(err) {
			var selector = "[name='" + err.attr + "']+.error-message";
			this.$(selector).text(err.error);
		}

	});

	return Directory;
});