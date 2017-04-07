angular.module('App', ['ui.router', 'ngResource'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    '$resourceProvider',
    function(
      $stateProvider,
      $urlRouterProvider,
      $locationProvider,
      $httpProvider,
      $resourceProvider
    ) { // specify custom types for $resource
      $resourceProvider.defaults.actions = {
        create: { method: 'POST' },
        get: { method: 'GET' },
        getAll: { method: 'GET', isArray: true },
        update: { method: 'PUT' },
        delete: { method: 'DELETE' }
      };

      //Setup states (routes)
      $stateProvider
        .state('homeState', {
          url: '/',
          component: 'homeComp'
        })
        .state('providerState', {
          url: '/provider',
          component: 'providerComp'
        })
        .state('dashboardState', {
          url: '/dashboard',
          component: 'dashboardComp'
        })
        .state('newListingState', {
          url: '/newListing',
          component: 'newListingComp'
        });

      //Redirect to login if url not found or not authenticated
      $urlRouterProvider.otherwise("/");

      //Removes # symbol for our routes
      $locationProvider.html5Mode(true);
    }
  ]);
