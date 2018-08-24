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
var chatResponse = "I have used my intelligence and calculated the carboon footprints for each of the options below.";
var counter = 0;  
var airlineDetails = require('./airline.json');

var action = req.body.queryResult.action;
  
if (action == 'book_confirmation')
{
  
   //var sendgrid = require("sendgrid")("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");
   //var email = new sendgrid.Email();

    //email.addTo("arun4mmit@gmail.com");
    //email.setFrom("test@test.com");
    //email.setSubject("Sending with SendGrid is Fun");
    //email.setHtml("and easy to do anywhere, even with Node.js");

    //sendgrid.send(email);  
  
  
  
  var cp = "unclassified";
  var chatResponse = "";
  airlineDetails.forEach(function (airlineDetail) {
   if(req.body.queryResult.parameters.flight == airlineDetail.name)
   {
      if (airlineDetail.stops < 2  && airlineDetail.luggage < 15 && airlineDetail.runningHours < 12 && airlineDetail.fuelEfficiency > 0.85 )
   {
     cp = "low";
   }
   
   if (airlineDetail.stops < 3  && airlineDetail.luggage < 15 && airlineDetail.runningHours < 15 && airlineDetail.fuelEfficiency > 0.75 && airlineDetail.fuelEfficiency < 0.85 )
   {
     cp = "average";
   } 
       
   if (airlineDetail.stops > 3 || airlineDetail.luggage > 15 || airlineDetail.runningHours > 15 || airlineDetail.fuelEfficiency < 0.75 )
   {
     cp = "very high";
   }
   chatResponse = "There you go, I have initiated the approval process and send the mail to your lead for confirmation. Once I get the approval, you will be booked on "+airlineDetail.name+" with a "+cp+" carbon footprint."+" Think again, choosing a Business class will always burn twice the amount of carbon dioxide and other toxics compared to flying economy.";   
   
   }
   });
}

airlineDetails.forEach(function (airlineDetail) {
  //chatResponse = airlineDetail.departingCity;
  if(req.body.queryResult.parameters.departCity == airlineDetail.departingCity && req.body.queryResult.parameters.arrivalCity == airlineDetail.arrivalCity)
  {
  counter = counter+1;  
  //var cp = calculateCarbonFootPrint(airlineDetail.stops,airlineDetail.luggage,airlineDetail.runningHours,airlineDetail.fuelEfficiency);
  var cp = "unclassified";
    
   if (airlineDetail.stops < 2  && airlineDetail.luggage < 15 && airlineDetail.runningHours < 12 && airlineDetail.fuelEfficiency > 0.85 )
   {
     cp = "low";
   }
   
   if (airlineDetail.stops < 3  && airlineDetail.luggage < 15 && airlineDetail.runningHours < 15 && airlineDetail.fuelEfficiency > 0.75 && airlineDetail.fuelEfficiency < 0.85 )
   {
     cp = "average";
   } 
       
   if (airlineDetail.stops > 3 || airlineDetail.luggage > 15 || airlineDetail.runningHours > 15 || airlineDetail.fuelEfficiency < 0.75 )
   {
     cp = "very high";
   }
    
  chatResponse = chatResponse + "\n\r\t"+"**** Option " +counter+" : Flight Name : "+airlineDetail.name+"- Running Hours : "+airlineDetail.runningHours+"- Stops : "+airlineDetail.stops+"- Carbon Footprint : "+cp+"." ;
  }
  
});
  

   
  return res.json({
    fulfillmentText: chatResponse
});
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
