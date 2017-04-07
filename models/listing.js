var mongoose = require('mongoose');


var ListingSchema = mongoose.Schema([{
    customer:String,
    time:String, //is this a string?
    date:Date,
    company:String,
    address:String,
    phoneNumber:String,
    bio:String, //description?  not 100% on what to call this
    img:String,  //linked URL
    service:String,
    price:Number,
    duration:Number, // in minutes?
    claimed:Boolean
}], {
    collection: 'listing'
});


module.exports = mongoose.model('listing', ListingSchema);
