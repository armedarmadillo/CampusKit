(function () {
    'use strict';
    angular.module('about', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/about', {templateUrl: 'partials/about/mainMenu.html'});
    }]);
}());