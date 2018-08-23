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
 
  
  var action = request.body.queryResult.action;
      
  
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
  
  var x = "";
  if (action == 'book_tickets')
    x = "Action was successful.";
    
  
  return res.json({
    fulfillmentText: x
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
