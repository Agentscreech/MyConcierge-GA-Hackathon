angular.module('App')
.component('listingsComp', {
  templateUrl: 'app/components/listings/listings.html',
  controller: ListingsCompCtrl,
  controllerAs: 'listingsComp'
});

function ListingsCompCtrl(Listing) {
  listingsComp = this;
  listingsComp.listings = "";
  Listing.getListings().then(function(res){
    listingsComp.listings = res.data;
    console.log(listingsComp.listings)
  });
}

ListingsCompCtrl.$inject = ['Listing'];
