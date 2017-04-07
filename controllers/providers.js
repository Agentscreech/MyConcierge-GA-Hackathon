var express = require('express');
var Provider = require('../models/provider');
var router = express.Router();

// this is to give a list of the providers and add a new one.
// TODO: have a way to update them with the sub document for their services


router.route('/')
    .get(function(req, res) {
        Provider.find({}, function(err, providers) {
            if (err) return res.status(500).send(err);
            console.log(req, res);
            return res.send(providers);
        });
    })
    .post(function(req, res) {
        //test to see if provider already exists
        Provider.findOne({
            name: req.body.name
        }, function(err, provider) {
            if (provider) return res.status(400).send({
                message: 'Provider already exists'
            });
            Provider.create(req.body, function(err, provider) {
                if (err) return res.status(500).send(err);

                return res.send(provider);
            });
        });
    });

module.exports = router;
