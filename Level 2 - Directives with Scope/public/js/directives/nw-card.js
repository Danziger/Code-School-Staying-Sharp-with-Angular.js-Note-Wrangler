angular.module('NoteWrangler').directive("nwCard", function($sce) {
   'use strict';
    
    /*
    
    // Version with $scope:
    
    function CardController($scope) {
        $scope.header = 'Note title';
        // With this we don't need to add card.something
        // in the template, nor the controllerAs property.
        // this is really referencing $scope behind the scenes
        // TODO: Complete notes from first module 2 video.
    }
    
    */
    
    // https://github.com/angular/angular.js/issues/7635
    
    function CardController() {
        var vm = this;
        
        // vm.header = 'Note title';
    }
    
    function CardLink(scope, element, attrs, controller, transcludeFn) {
        
        // TODO: Event delegation here?
        
        var description = element.find('.card-body');
        
        description.on('click', function(e) {
            description.toggleClass('summary');
        });
        
        controller.description = $sce.trustAsHtml(markdown.toHTML(controller.description));
    }
    
    return {
        restrict: 'E',
        templateUrl : 'templates/directives/nw-card.html',
        scope: true, // Isolated Scope (by default the don't have one, so everything is inherited from the parent)
        controller: CardController,
        controllerAs: 'card',
        bindToController: {
            header: '@', // @ passes in a string, = (2-way) no need brackets, &
            icon: '@',
            description: '=',
            id: '@',
            type: '@'
        },
        link: CardLink
    }
});