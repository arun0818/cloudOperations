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
var chatResponse = "Below is a list of details I could fetch... \n\r\t";
var counter = 0;  
var airlineDetails = require('./airline.json');
airlineDetails.forEach(function (airlineDetail) {
  //chatResponse = airlineDetail.departingCity;
  if(req.body.queryResult.parameters.departCity == airlineDetail.departingCity && req.body.queryResult.parameters.arrivalCity == airlineDetail.arrivalCity)
  {
  counter = counter+1;  
  var cp = calculateCarbonFootPrint(airlineDetail.stops,airlineDetail.luggage,airlineDetail.runningHours,airlineDetail.fuelEfficiency);
  chatResponse = chatResponse + "\n\r\t" +"Option :" +counter+" "+airlineDetail.name+ " which takes "+airlineDetail.runningHours+" hours and has "+airlineDetail.stops+" stops. The carbon footprint is \n\r\t"+cp+"." ;
  }
  
});
  
  function calculateCarbonFootPrint(stops,luggage,runningHours,fuelEfficiency)
  {
    var cp = "high" ;
   /*if (stops < 2  luggage < 15 && runningHours < 12 && fuelEfficiency > 0.85 )
   {
     cp = "low";
   }
   
   if (stops < 3  luggage < 15 && runningHours < 15 && fuelEfficiency > 0.75 && fuelEfficiency < 0.85 )
   {
     cp = "average";
   } 
    
    
   if (stops > 3 || luggage > 15 || runningHours > 15 || fuelEfficiency < 0.75 )
   {
     cp = "very high";
   } */
   return cp;
  }
  
 
   
  return res.json({
    fulfillmentText: chatResponse
});
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
