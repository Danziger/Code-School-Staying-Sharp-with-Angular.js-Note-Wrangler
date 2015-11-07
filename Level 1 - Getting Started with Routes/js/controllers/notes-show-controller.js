angular.module("NoteWrangler").controller("NotesShowController", function($http, $routeParams) {
    
    var controller = this;
    
    $http({method:"GET", url: "notes.json"}).success(function(data){
       controller.note = data[$routeParams.id]; 
    });
});