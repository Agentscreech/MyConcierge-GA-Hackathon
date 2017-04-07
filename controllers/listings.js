var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();

// this is to give a list of the listings and add a new one.
// TODO: perhaps use the DB call to filter?


router.route('/')
    .get(function(req, res) {
        Listing.find({}, function(err, listings) {
            if (err) return res.status(500).send(err);
            console.log(req, res);
            return res.send(listings);
        });
    })
    .post(function(req, res) {
        //test to see if listing already exists
        Listing.findOne({
            name: req.body.name
        }, function(err, listing) {
            if (listing) return res.status(400).send({
                message: 'listing already exists'
            });
            Listing.create(req.body, function(err, listing) {
                if (err) return res.status(500).send(err);

                return res.send(listing);
            });
        });
    });
});

module.exports = router;
