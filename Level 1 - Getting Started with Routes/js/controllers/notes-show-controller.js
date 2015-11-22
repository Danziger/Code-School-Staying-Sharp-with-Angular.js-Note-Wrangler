/*global console, angular */

angular.module("NoteWrangler").controller("NotesShowController", function (/*Note,*/ $http, $routeParams, $scope) {

    "use strict";
    
    // $scope.note = Note.get({id: $routeParams.id});
    
    $http({method: "GET", url: "notes.json"}).success(function (data) {
        console.log("GET - notes.json[" + $routeParams.id + "]: ");
        console.table(data);
        $scope.note = data[$routeParams.id];
    });
});

console.log("notes-show-controller.js loaded!");