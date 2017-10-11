angular.module("myModule", ['ui.router', 'angularUtils.directives.dirPagination']);

angular.module("myModule").config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/welcome");

    $stateProvider.state("welcome",{
      url: "/welcome",
      templateUrl : "static/html/welcome.html",
      controller: 'userController'
    })
  }
);