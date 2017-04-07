angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl() {
  var profileComp = this;
  profileComp.data = {
    name: "Nicole Brown",
    company: "R&R Salon",
    title: "Hairstylist",
    industry: "hair",
    address: "nicole.brown@gmail.com",
    phoneNumber: "206.123.4567",
    bio: "I'm the best stylist in the world!",
    img: "../../images/nicole_brown.png",
    services: ["Women's Haircut", "Women's Color",
      "Women's Style", "Women's Bridal",
      "Hair Dye", "Conditioning Treatment",
      "Balayage", "Hair Extensions",
      "Men's Haircut", "Straightening"],
  };


}
ProfileCompCtrl.$inject = [];
