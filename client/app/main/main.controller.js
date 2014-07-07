'use strict';

angular.module('eventtrackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.mideastEvents = [];

    $http.get('/api/events').success(function(events) {
      $scope.mideastEvents = events;
    });
  });