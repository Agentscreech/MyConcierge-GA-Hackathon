var mongoose = require('mongoose');


var ListingSchema = mongoose.Schema({
    customer:String,
    time:String, //is this a string?
    date:String,
    company:String, //maybe find a way to return the company rating?
    address:String,
    phoneNumber:String,
    service:String,
    price:Number,
    duration:Number, // in minutes?
    claimed:Boolean
}, {
    collection: 'listing'
});


module.exports = mongoose.model('Listing', ListingSchema);
