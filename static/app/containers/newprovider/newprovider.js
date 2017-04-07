angular.module('App')
.component('newProviderComp', {
  templateUrl: 'app/containers/newprovider/newprovider.html',
  controller: newProviderCompCtrl,
  controllerAs: 'newProviderComp'
});

function newProviderCompCtrl() {
  var newProviderComp = this;
  newProviderComp.data = {
    company: "",
    industry: "",
    address: "",
    phoneNumber: "",
    bio: "",
    img: "",
    services: [],
  }
}
