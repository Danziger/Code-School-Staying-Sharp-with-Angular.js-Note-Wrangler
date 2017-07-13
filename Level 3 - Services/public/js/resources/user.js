/*global angular*/

// There's no need to use the Array Syntax if we are not going to use minification as
// the name of the parameters indicate the injector what to do.
//
// However, with minification those parameter names are changed and so the injector 
// will fail if the proper name is not provided with the Array Syntax.
//
// We declare this as a Factory Service anyway, but we use $resource instead of $http
// inside to implement its functionality.

angular.module('NoteWrangler').factory('User', function UserFactory($resource) {
	return $resource('/users/:id', {}, {
		update: { // Custom method not present by default
			method: 'PUT'
		}
	});
});