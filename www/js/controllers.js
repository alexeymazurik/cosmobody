angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.content = 'Lalka';
})

.controller('LoginCtrl', function($scope, $location) {
  $scope.signIn = function() {
    $location.path('/tab/home');
  }
})

.controller('TabCtrl', function($scope, $location) {
  $scope.toSetting = function(){
    $location.path('/tab/settings');
  } 
})

.controller('WorkoutsCtrl', function($scope, $location) {
  $scope.toWorkoutDay = function(){
    $location.path('/tab/workouts/day');
  } 
})

.controller('ProgramsCtrl', function($scope, $location) {
  $scope.toProgram = function(){
    $location.path('/tab/programs/program');
  } 
})

.controller('TrainersCtrl', function($scope, $location) {
  $scope.toTrainer = function(){
    $location.path('/tab/trainers/trainer');
  } 
})

.controller('LandingCtrl', function($scope, $location, $ionicPopup) {
  $scope.login = function(){
    $location.path('/login');
  }

  $scope.showPopup = function() {
    $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Sign In to iTunes Store',
    subTitle: 'Enter Apple ID password for "fitchick@gmail.com".',
    scope: $scope,
    buttons: [
    { 
      text: 'Cancel' 
    },
    {
      text: '<b>Save</b>',
      type: 'button-positive',
      onTap: function(e) {
        if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
      ]
    });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
};

});
