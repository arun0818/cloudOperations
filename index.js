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
 
//var action = req.body.queryResult.action;
 
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
  
  //var reqDepartCity = req.body.queryResult.parameters.departCity;
  //var reqArrivalCity = req.body.queryResult.parameters.arrivalCity;
  //var reqStartDate = req.body.queryResult.parameters.startDate;
  //var reqEndDate = req.body.queryResult.parameters.endDate;
      
var fs = require('./airline.json');
  
var dCity = fs.flightDetails.departingCity;
var aCity = fs.flightDetails.arrivalCity;
var name = fs.flightDetails.name;
var stops = fs.flightDetails.stops;
var luggage = fs.flightDetails.luggage;
//var text = dCity+aCity+name+stops+luggage;

var chatResponse = "default value";
var action = req.body.queryResult.action;
  
  if (action == 'book_tickets')
  {
    if(req.body.queryResult.parameters.departCity == fs.flightDetails.departingCity && req.body.queryResult.parameters.arrivalCity == fs.flightDetails.arrivalCity && fs.flightDetails.stops == 'One')
    {
    chatResponse = 'Option : ' +fs.flightDetails.name+ ' which takes '+fs.flightDetails.runningHours+' hours and has '+fs.flightDetails.stops+' stops.';
    }
    //if(req.body.queryResult.parameters.departCity == fs.flightDetails.departingCity && req.body.queryResult.parameters.arrivalCity == fs.flightDetails.arrivalCity /*&& fs.flightDetails.stops == 'Two'*/)
    //{
    //chatResponse = chatResponse+' Option : ' +fs.flightDetails.name+ ' which takes '+fs.flightDetails.runningHours+' hours and has '+fs.flightDetails.stops+' stops.';
    //} 
  
  } 
  
   
  return res.json({
    fulfillmentText: chatResponse
});
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
