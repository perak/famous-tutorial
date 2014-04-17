isValidEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    return false;
};

isValidPassword = function(value, min_length) {
	if(!value || value == "" || value.length < min_length)
		return false;
	return true;
}

validateForm = function(formObject, validationCallback, errorCallback, submitCallback) {
	var values = {};
	var error = false;
	formObject.find("input,select,textarea").each(function() {
		var inputObject = $(this);
		var fieldName = inputObject.attr("name");
		var labelObject = inputObject.parent().find("label[for='" + fieldName + "']");
		var fieldValue = inputObject.val();
		var dataType = inputObject.attr("data-type") ? inputObject.attr("data-type").toUpperCase() : "STRING";

		if(inputObject.attr("type") == "checkbox") {
			// auto set data type for checkbox
			if(!inputObject.attr("data-type")) {
				// single checkbox with that name means dataType="BOOL" else it is "ARRAY"
				if(formObject.find("input[name='" + fieldName + "']").length == 1) {
					dataType = "BOOL";
				}
				else {
					dataType = "ARRAY";
				}
			}

			if(dataType == "BOOL") fieldValue = inputObject.is(":checked");
			if(dataType == "ARRAY") fieldValue = inputObject.is(":checked") ? fieldValue : "";
		}
		var minValue = inputObject.attr("data-min");
		var maxValue = inputObject.attr("data-max");
		var labelText = inputObject.attr("placeholder") ? inputObject.attr("placeholder") : "";
		if(!labelText) {
			labelText = labelObject ? labelObject.text() : fieldName;
		}

		function validationError(errorMessage) {
			inputObject.parent().addClass("has-error");
			inputObject.focus();
			if(errorCallback) 
				errorCallback(errorMessage);
			error = true;
		}

		// Check required
		if(inputObject.attr("required") && !fieldValue) {
			validationError(labelText + " is required");
			return false;
		}

		// Convert to bool
		if(dataType == "BOOL") {
			fieldValue = fieldValue ? true : false;
		}

		// Check Integer, also min and max value
		if(dataType == "INTEGER") {
			var intValue = parseInt(fieldValue);
			if(isNaN(intValue)) {
				validationError(labelText + ": Invalid value entered");
				return false;
			}

			if(minValue && !isNaN(parseInt(minValue)) && intValue < parseInt(minValue)) {
				validationError(labelText + " must be equal or greater than " + minValue);
				return false;
			}

			if(maxValue && !isNaN(parseInt(maxValue)) && intValue > parseInt(maxValue)) {
				validationError(labelText + " must be equal or less than " + maxValue);
				return false;
			}
			fieldValue = intValue;
		}

		// Check Float, also Min and Max value
		if(dataType == "FLOAT")
		{
			var floatValue = parseFloat(fieldValue);
			if(isNaN(floatValue)) {
				validationError(labelText + ": Invalid value entered");
				return false;
			}

			if(minValue && !isNaN(parseFloat(minValue)) && floatValue < parseFloat(minValue)) {
				validationError(labelText + " must be equal or greater than " + minValue);
				return false;
			}

			if(maxValue && !isNaN(parseFloat(maxValue)) && floatValue > parseFloat(maxValue)) {
				validationError(labelText + " must be equal or less than " + maxValue);
				return false;
			}
			fieldValue = floatValue;
		}

		// Check valid E-mail address
		if(dataType == "EMAIL") {
		    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if(!filter.test(fieldValue)) {
				validationError(labelText + ": please enter valid e-mail address");
				return false;
		    }
		}

		if(dataType == "ARRAY") {
			var newValue = values[fieldName] ? values[fieldName] : [];
			if(fieldValue) {
				newValue.push(fieldValue);
			}

			fieldValue = newValue;
		}

		// Custom validation
		if(validationCallback) {
			var errorMessage = validationCallback(fieldName, fieldValue);
			if(errorMessage) {
				validationError(errorMessage);
				return false;
			}
		}

		values[fieldName] = fieldValue;
	});

	if(error)
		return;

	if(submitCallback)
		submitCallback(values);
}
