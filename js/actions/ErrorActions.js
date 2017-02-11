var ErrorConstants = require('../constants/ErrorConstants');

var models = require('../models.js');
var Error = models.Error;

function serverError(error) {
	return {
		type: ErrorConstants.ERROR_SERVER,
		error: error
	};
}

function ajaxError(error) {
	var e = new Error();
	e.ErrorId = 5;
	e.ErrorString = "Request Failed: " + error;

	return {
		type: ErrorConstants.ERROR_AJAX,
		error: e
	};
}

function clearError() {
	return {
		type: ErrorConstants.CLEAR_ERROR,
	};
}

module.exports = {
	serverError: serverError,
	ajaxError: ajaxError,
	clearError: clearError
};