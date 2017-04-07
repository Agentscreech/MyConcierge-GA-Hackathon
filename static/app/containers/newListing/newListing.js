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
    data: "",
    company: "",
    industry: "",
    address: "",
    phoneNumber: "",
    service: "",
    price: "",
    duration: "",
    claimed: "false"
  };

  newListingComp.create = function(){
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
