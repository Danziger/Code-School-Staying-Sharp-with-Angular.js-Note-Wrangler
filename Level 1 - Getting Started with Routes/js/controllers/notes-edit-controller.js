/*global console, angular */

angular.module("NoteWrangler").controller("NotesEditController", function (/*Note,*/ $http, $routeParams, $scope) {

    "use strict";
    
    // $scope.note = Note.get({id: $routeParams.id});
    
	// http://stackoverflow.com/questions/28583651/contenteditable-with-ng-model-doesnt-work
	
    $http({method: "GET", url: "notes.json"}).success(function (data) {
        console.log("GET - notes.json[" + $routeParams.id + "]: ");
        console.table(data);
        $scope.note = data[$routeParams.id];
    });
});

console.log("notes-edit-controller.js loaded!");