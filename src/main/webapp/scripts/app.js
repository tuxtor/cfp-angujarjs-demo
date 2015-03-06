'use strict';

angular.module('cfp',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Presentations',{templateUrl:'views/Presentation/search.html',controller:'SearchPresentationController'})
      .when('/Presentations/new',{templateUrl:'views/Presentation/detail.html',controller:'NewPresentationController'})
      .when('/Presentations/edit/:PresentationId',{templateUrl:'views/Presentation/detail.html',controller:'EditPresentationController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
