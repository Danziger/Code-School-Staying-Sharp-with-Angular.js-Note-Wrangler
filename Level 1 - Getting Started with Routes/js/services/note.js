/*global console, angular */

angular.module("NoteWrangler").factory("Note", function($resource) {
    
    "use strict";
    
    return $resource("/notes/:id");
    
});