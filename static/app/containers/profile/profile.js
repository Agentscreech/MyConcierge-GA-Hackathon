angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl(Profile) {
  var profileComp = this;
  profileComp.data = {
    company: "",
    industry: "",
    address: "",
    phoneNumber: "",
    bio: "",
    img: "",
    services: [],
  };

  profileComp.industries = ["hair", "nails", "spa"];


}
ProfileCompCtrl.$inject = ['Profile'];
