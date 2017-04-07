angular.module('App')
.component('navbarComp', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarCompCtrl,
  controllerAs: 'navbarComp'
});

function NavbarCompCtrl($state) {
  var navbarComp = this;
  navbarComp.isLoggedIn = false;
}

NavbarCompCtrl.$inject = ['$state'];
