/*global console, angular */

angular.module("NoteWrangler").controller("NotesIndexController", function (/*Note,*/ $http, $scope) {

    "use strict";
    
    // $scope.notes = Note.query();
    
    $http({method: 'GET', url: 'notes.json'}).success(function (data) {
        console.log("GET - notes.json: ");
        console.table(data);
        $scope.notes = data;
    });
});

console.log("notes-index-controller.js loaded!");