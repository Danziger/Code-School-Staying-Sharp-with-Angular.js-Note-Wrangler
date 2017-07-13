// This Service (Factory) is a better way to obtain the Users than using the $http
// directly inside the controllers, as we can reuse code and it's easier to test.
//
// However, the ngResource way will do the same with just a few lines of code as this
// is a very common and repeated pattern across many applications.
//
// ------------------------------------------------------------------------------------
//
// There's no need to use the Array Syntax if we are not going to use minification as
// the name of the parameters indicate the injector what to do.
//
// However, with minification those parameter names are changed and so the injector 
// will fail if the proper name is not provided with the Array Syntax.

/*global angular*/
angular.module('NoteWrangler').factory('User', function UserFactory($http) {
	
	'use strict';
	
	function all() {
		return $http({method: 'GET', url: '/users'});
	}
		
	function find(id) {
		return $http({method: 'GET', url: '/users' + id});
	}
	
	function create(note) {
		return $http({method: 'POST', url: '/users', data: note});
	}
	
	function update(id, note) {
		return $http({method: 'PUT', url: '/users' + id, data: note});
	}
	
	function remove(id) {
		return $http({method: 'DELETE', url: '/users' + id});
	}
	
	return {
		all: all,
		find: find,
		create: create,
		update: update,
		remove: remove
	};
});