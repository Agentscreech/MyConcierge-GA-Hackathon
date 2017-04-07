angular.module('App')
.component('providerComp', {
  templateUrl: 'app/containers/provider/provider.html',
  controller: ProviderCompCtrl,
  controllerAs: 'providerComp'
});

function ProviderCompCtrl() {
  var providerComp = this;
  providerComp.data = {
    company: "",
    industry: "",
    address: "",
    phoneNumber: "",
    bio: "",
    img: "",
    services: [],
  }
}
ProviderCompCtrl.$inject = [];
