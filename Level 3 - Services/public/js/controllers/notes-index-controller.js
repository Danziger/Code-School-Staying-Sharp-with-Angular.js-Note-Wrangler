/*global console, angular */

// We just need to use the array syntax if we need to use minification as in that case the parameter names of the function will be changed!
angular.module("NoteWrangler").controller("NotesIndexController", ["Note", function (Note) {

    "use strict";

    var vm = this;
    // Long version:
    // $http({method: 'GET', url: '...'}).success(...);
    
    // Shortcut for GET:
	// $http.get('/notes').success(...);
	
	// With the Note Service (Factory):
	/*
    Note.all().success(function (data) {
        // We could also use $scope (needs to be injected first):
        // $scope.notes = data;
        vm.notes = data;
    });
	*/
	
	vm.notes = Note.query();
}]);