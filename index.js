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
 
  var depart-city =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.depart-city
      ? req.body.queryResult.parameters.depart-city
      : "Test Data";
  
  var arrival-city =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.arrival-city
      ? req.body.queryResult.parameters.arrival-city
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
    
  
  return res.json({
    displayText: depart-city,
    source: arrival-city
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
