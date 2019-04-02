const express = require("express");
const bodyParser = require("body-parser");

module.exports = function(app){
	app.get('/',function(request, response){
		response.sendFile(path.join(__dirname, 'home.html'));
	});
	app.get('/survey',function(request, response){
		response.sendFile(path.join(__dirname,'survey.html'));
	});
}
