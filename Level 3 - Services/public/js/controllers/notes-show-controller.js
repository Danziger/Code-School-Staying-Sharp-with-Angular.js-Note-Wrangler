/*global console, angular */

angular.module("NoteWrangler").controller("NotesShowController", function ($http, $routeParams, Note) {

    "use strict";

    var vm = this;
    // Long version:
    // $http({method: 'GET', url: '...'}).success( );
    
    // Shortcut for GET:
    /*
	$http.get('/notes/' + $routeParams.id).success(function (data) {
        // We could also use $scope (needs to be injected first):
        // $scope.note = data;
        vm.note = data;
    });
	*/
	
	/*
	Note.find($routeParams.id).success(function(data) {
		vm.note = data;
	});
	*/
	
	// Shorter:
	
	vm.note = Note.get({id: $routeParams.id});
});