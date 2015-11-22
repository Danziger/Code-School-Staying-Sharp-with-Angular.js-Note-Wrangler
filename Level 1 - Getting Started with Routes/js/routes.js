/*global console, angular */

angular.module("NoteWrangler", ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    
    "use strict";
    
    // TODO: Reorganize stuff here:
    
    $routeProvider.when('/', {
        // redirect to the notes index
        redirectTo: '/notes'
    })

        .when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            conrollerAs: 'indexCtrl'
        })

        .when('/notes/new', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesCreateController',
            conrollerAs: 'createCtrl'
        })

        .when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            conrollerAs: 'showCtrl'
        })

        .when('/notes/:id/edit', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesEditController',
            conrollerAs: 'editCtrl'
        })
    
        .when('/users', {
            templateUrl: 'templates/pages/users/index.html',
            controller: 'UsersIndexController',
            conrollerAs: 'indexCtrl'
        })

        .when('/users/:id', {
            templateUrl: 'templates/pages/users/show.html',
            controller: 'UsersShowController',
            conrollerAs: 'showCtrl'
        })

        .when('/profile/edit', {
            templateUrl: 'templates/pages/profile/edit.html',
            controller: 'ProfileEditController',
            conrollerAs: 'profileCtrl'
        })

        .otherwise({redirectTo: '/'});
    
}]);

console.log("routes.js loaded!");