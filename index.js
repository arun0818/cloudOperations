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
var chatResponse = "";
var counter = 0;  
var airlineDetails = require('./airline.json');
airlineDetails.forEach(function (airlineDetail) {
  //chatResponse = airlineDetail.departingCity;
  if(req.body.queryResult.parameters.departCity == airlineDetail.departingCity && req.body.queryResult.parameters.arrivalCity == airlineDetail.arrivalCity)
  {
  counter = counter+1;  
  chatResponse = chatResponse + "\n\r\t" +"Option :" +counter+" "+airlineDetail.name+ " which takes "+airlineDetail.runningHours+" hours and has "+airlineDetail.stops+" stops.\n\r\t";
  }
  
});
  
  
//var fs = require('./airline.json');
  //var chatResponse = "default value";
  //for(var i in fs.flightDetails)
  //{
    //chatResponse = flightDetails[i].departingCity;
  //}
   
  
  //var action = req.body.queryResult.action;
  
  //if (action == 'book_tickets')
  //{
    //if(req.body.queryResult.parameters.departCity == fs.flightDetails.departingCity && req.body.queryResult.parameters.arrivalCity == fs.flightDetails.arrivalCity && fs.flightDetails.stops == 'One')
    //{
    //chatResponse = 'Option : ' +fs.flightDetails.name+ ' which takes '+fs.flightDetails.runningHours+' hours and has '+fs.flightDetails.stops+' stops.';
    //}
    //if(req.body.queryResult.parameters.departCity == fs.flightDetails.departingCity && req.body.queryResult.parameters.arrivalCity == fs.flightDetails.arrivalCity /*&& fs.flightDetails.stops == 'Two'*/)
    //{
    //chatResponse = chatResponse+' Option : ' +fs.flightDetails.name+ ' which takes '+fs.flightDetails.runningHours+' hours and has '+fs.flightDetails.stops+' stops.';
    //} 
  
  //} 
  
   
  return res.json({
    fulfillmentText: chatResponse
});
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
