/*global console, angular */

angular.module("NoteWrangler").controller("NotesCreateController", function ($http) {

    "use strict";

    var vm = this;
    vm.errors = [];
    vm.note = {};
    vm.updating = false;
    
    vm.saveNote = function(note) {
        vm.errors = [];
        vm.updating = true;
        
        // Long version:
        // $http({method: 'POST', url: '...', data: note}).success( );
        
        // Shortcut for GET:
        $http.post('/notes', note).catch(function (res) {
            // We could also use $scope (needs to be injected first):
            // $scope.errors = res.data.errors;
            vm.errors = res.data.errors;
        }).finally(function () {
            vm.updating = false;
        });
    };
});