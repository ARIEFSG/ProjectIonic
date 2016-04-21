// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  
//___________________________________________________________________



  .state('app.cektarif', {
    url: '/cektarif',
    views: {
      'menuContent': {
        templateUrl: 'templates/cektarif.html',
        controller: 'tarifctrl'
      }
    }
  })

  .state('app.cekresi', {
    url: '/cekresi',
    views: {
      'menuContent': {
        templateUrl: 'templates/cekresi.html',
        controller: 'resictrl'
      }
    }
  })

  .state('app.tentang', {
    url: '/tentang',
    views: {
      'menuContent': {
        templateUrl: 'templates/tentang.html'
      }
    }
  })

  .state('app.keluar', {
      url: '/keluar',
      views: {
        'menuContent': {
          templateUrl: 'templates/Keluar.html'
        }
      }
    }
);









  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cektarif');
});




