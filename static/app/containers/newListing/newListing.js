angular.module('App')
.component('newListingComp', {
  templateUrl: 'app/containers/newListing/newListing.html',
  controller: NewListingComp,
  controllerAs: 'newListingComp'
});

function NewListingComp(Listing) {
  var newListingComp = this;
  newListingComp.data = {
    time: "",
    date: "",
    company: "",
    address: "",
    phoneNumber: "",
    service: "",
    price: "",
    duration: "",
    claimed: "false"
  };


  newListingComp.create = function(){
    console.log("data before sending to service", newListingComp.data );
    Listing.createListing(newListingComp.data).then(function(listing){
      if (listing !== false){
        console.log(listing, " added!");
      } else {
        console.log(listing.status, "error");
      }
    });
  };

}
NewListingComp.$inject = ['Listing'];
