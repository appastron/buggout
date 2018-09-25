var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../models/events.js');

router.get('/', function(req, res, next) {
    Events.find(function (err, eventEntries) {
      var eventsList = {
        events: eventEntries
      };
      if (err) return next(err);
      // res.json(eventEntries);
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
    var eventName = req.query.Name
    var eventType = req.query.Type
    var eventMessage = req.query.Message
    var eventJson = {
      event_name: eventName,
      event_type: eventType,
      event_message: eventMessage
    };

    Events.create(eventJson, function (err, post) {
      if (err) return next(err);
      // res.json(post);
      Events.find(function (err, eventEntries) {
        var eventsList = {
          events: eventEntries
        };
        if (err) return next(err);
        // res.json(eventEntries);
        res.render("events", eventsList);
      });
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

