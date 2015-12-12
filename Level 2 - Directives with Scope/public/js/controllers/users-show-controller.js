/*global console, angular */

angular.module("NoteWrangler").controller("UsersShowController", function ($http, $routeParams) {

    "use strict";

    var vm = this;
    // Long version:
    // $http({method: 'GET', url: '...'}).success( );
    
    // Shortcut for GET:
    $http.get('/users/' + $routeParams.id).success(function (data) {
        // We could also use $scope (needs to be injected first):
        // $scope.user = data;
        vm.user = data;
    });
});