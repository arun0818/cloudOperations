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
var chatResponse = "Below is a list of details I could fetch sorted (least to most) based on their Carboon Footprint. \n\r\t";
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
  
  
 
   
  return res.json({
    fulfillmentText: chatResponse
});
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
