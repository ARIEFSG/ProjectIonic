angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

//__________________________________________________________________________________

.controller('resictrl', function($scope){

  $scope.text={};
  var nomor = $scope.text.nomor;
  $scope.klikresi = function(nomor){
    $scope.message = nomor 
    +" DELIVERED";
  }
})


.controller('tarifctrl', function($scope, $stateParams) {
  $scope.tarif = $stateParams.tarif;
})



/*
.controller('Keluarctrl',function($scope, $ionicPopup, $timeout) {

  $scope.showConfirm = function() {

   var confirmPopup = $ionicPopup.confirm({

      title: 'Keluar Aplikasi',

      template: 'Yakin akan keluar?',

   });

   confirmPopup.then(function(res) {

      if (res) {

         console.log('You clicked on "OK" button');

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });





*/



