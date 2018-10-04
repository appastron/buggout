var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../models/events.js');

router.get('/', function(req, res, next) {
//***** add a VSCode Debugger break point on events.find
    Events.find(function (err, eventEntries) {
      var eventsList = {
        events: eventEntries
      };
      if (err) return next(err);
      // res.json(eventEntries);
//***** add a VSCode Debugger break point on res.render
      res.render("events", eventsList);
    });
  });
  
  /* GET SINGLE PRODUCT BY ID */
  router.get('/:id', function(req, res, next) {
    Events.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE PRODUCT */
  router.post('/', function(req, res, next) {
//***** add a VSCode Debugger break point on var eventJSON to inspect req.body
    var eventJSON = req.body; //JSON.parse(req);

    Events.create(eventJSON, function (err, post) {
      if (err) return next(err);
      // res.json(post);
//***** add a VSCode Debugger break point on res.status to confirm the create function was successful 
      res.status(200).end();

      //Having this code did nothing on the render of the response
      // Events.find(function (err, eventEntries) {
      //   var eventsList = {
      //     events: eventEntries
      //   };
      //   if (err) return next(err);
      //   // res.json(eventEntries);
      //   res.render("events", eventsList);
      //});

    });
  });
  
  /* UPDATE PRODUCT */
  router.put('/:id', function(req, res, next) {
    Events.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE PRODUCT */
  router.delete('/:id', function(req, res, next) {
    Events.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;

