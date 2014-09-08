var myApp = angular.module('<%=appNameSlug%>', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).when('/page1', {
      templateUrl: 'partials/page1.html',
      controller: 'Page1Ctrl'
    }).when('/page2', {
      templateUrl: 'partials/page2.html',
      controller: 'Page2Ctrl'
    }).when('/page3', {
      templateUrl: 'partials/page3.html',
      controller: 'Page3Ctrl'
    }).otherwise({
      redirectTo: '/'
    });
});
