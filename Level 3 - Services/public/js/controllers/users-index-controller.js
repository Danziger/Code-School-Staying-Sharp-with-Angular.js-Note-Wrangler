/*global console, angular */

angular.module("NoteWrangler").controller("UsersIndexController", function ($http, Gravatar) {

    "use strict";

    var vm = this;
    // Long version:
    // $http({method: 'GET', url: '...'}).success(/*...*/);
    
    // Shortcut for GET:
    $http.get('/users').success(function (data) {
        // We could also use $scope (needs to be injected first):
        // $scope.users = data;
        vm.users = data;
		// TODO: Use gravatar service!
    });
	
	vm.Gravatar = Gravatar.generate;
});