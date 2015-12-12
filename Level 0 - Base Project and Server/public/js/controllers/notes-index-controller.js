/*global console, angular */

angular.module("NoteWrangler").controller("NotesIndexController", function (/*Note,*/ $http, $scope) {

    "use strict";

    $scope.notes = [{
        title: "Test Note",
        description: "Bla bla bla..."
    }];

});