/*global console, angular */

angular.module("NoteWrangler").controller("NotesCreateController", function ($http) {

    "use strict";
    
    var controller = this;
    
    this.saveNote = function (note) {
        controller.errors = null;
        $http({method: "POST", url: "/notes", data: note}).catch(function () {
            controller.errors = note.data.error;
        });
    };
});