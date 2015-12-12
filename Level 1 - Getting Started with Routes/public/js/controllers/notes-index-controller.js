/*global console, angular */

angular.module("NoteWrangler").controller("NotesIndexController", function ($http) {

    "use strict";

    var vm = this;
    // Long version:
    // $http({method: 'GET', url: '...'}).success( );
    
    // Shortcut for GET:
    $http.get('/notes').success(function (data) {
        // We could also use $scope (needs to be injected first):
        // $scope.notes = data;
        vm.notes = data;
    });
});