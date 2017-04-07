angular.module('App')
.component('providerComp', {
  templateUrl: 'app/containers/provider/provider.html',
  controller: ProviderCompCtrl,
  controllerAs: 'providerComp'
});

function ProviderCompCtrl(Provider) {
  var providerComp = this;
  providerComp.data = {
    company: "",
    industry: "",
    address: "",
    phoneNumber: "",
    bio: "",
    // img: "",
    // services: [],
  };
  providerComp.create = function(){
    Provider.createProvider(providerComp.data).then(function(provider){
      if (provider !== false){
        console.log(provider, " added!");
      } else {
        console.log(provider.status, "error");
      }
    });
  };
}
ProviderCompCtrl.$inject = ['Provider'];
