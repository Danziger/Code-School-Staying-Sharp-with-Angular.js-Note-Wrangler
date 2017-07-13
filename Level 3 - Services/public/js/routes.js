/*global angular*/
/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('NoteWrangler').config(['$routeProvider', function ($routeProvider) {
    'use strict';
    
    $routeProvider
        .when('/', {
            // redirect to the notes index
            redirectTo: '/notes'
        })

        .when('/users', {
            templateUrl: 'templates/pages/users/index.html',
            controller: 'UsersIndexController',
            controllerAs: 'usersIndexCtrl'
        })

        .when('/users/:id', {
            templateUrl: 'templates/pages/users/show.html',
            controller: 'UsersShowController',
            controllerAs: 'notesShowCtrl'
        })

        .when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'notesIndexCtrl'
        })

        .when('/notes/new', {
            templateUrl: 'templates/pages/notes/create.html',
            controller: 'NotesCreateController',
            controllerAs: 'notesCreateCtrl'
        })

        .when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            controllerAs: 'notesShowCtrl'
        })

        .when('/notes/:id/edit', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesEditController',
            controllerAs: 'notesEditCtrl'
        })

        .when('/profile/edit', {
            templateUrl: 'templates/pages/profile/edit.html',
            controller: 'ProfileEditController',
            controllerAs: 'profileEditCtrl'
        })

        .otherwise({redirectTo: '/'});
}]);