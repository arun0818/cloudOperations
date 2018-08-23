"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
 
var action = req.body.queryResult.action;
  var chatResponse = "";
/******************
var chatResponse = "";
var jsonFile = require('jsonfile')
var fileName = 'airline.json'

jsonFile.readFile(fileName, function(err, jsonData) {
  if (err) throw err;
  for (var i = 0; i < jsonData.length; ++i) {

  chatResponse = jsonData[i].name;
  //console.log("Emp Name: "+jsonData[i].place);
  }
});
*//////
//var fs = require('./airline.json');
//var json = JSON.parse(fs.readFileSync('/path/to/file.json', 'utf8'));

//var fs = require('./airline.json');
//var chatResponse = fs.name;
  
  
  var departCity =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.departCity
      ? req.body.queryResult.parameters.departCity
      : "Test Data";
  
  var arrivalCity =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.arrivalCity
      ? req.body.queryResult.parameters.arrivalCity
      : "Test Data";
  
    var startDate =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.startDate
      ? req.body.queryResult.parameters.startDate
      : "Test Data";
  
    var endDate =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.endDate
      ? req.body.queryResult.parameters.endDate
      : "Test Data";
  
  //var x = "";
  /*if (action == 'book_tickets')
  {
    x = "Action was successful.";
  } */
  
  return res.json({
    //fulfillmentText: chatResponse
    fulfillmentText: chatResponse
    /*text: x
    departingCity: departCity,
    arrivalCity: arrivalCity,
    startDate: startDate,
    endDate: endDate*/
   
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
