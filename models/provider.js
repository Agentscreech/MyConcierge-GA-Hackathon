var mongoose = require('mongoose');

//sub document to provider.  Populate by Provider({services: [{ name: haircut, price: 25, duration: 30},{name:perm,price:200,duration:300}]) Access by provider.services[0].name => haircut

var ServiceSchema = mongoose.Schema({
    name:String,
    price:Number,
    duration:Number, //in minutes?
});

var ProviderSchema = mongoose.Schema([{
    company:String,
    industry:String,
    address:String,
    phoneNumber:String,
    bio:String, //description?  not 100% on what to call this
    img:String,  //linked URL
    services:[ServiceSchema],
    rating:Number
}], {
    collection: 'provider'
});


module.exports = mongoose.model('Provider', ProviderSchema);
