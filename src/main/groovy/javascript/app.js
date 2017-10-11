var app = angular.module("myModule", ["ui-router"]).config(
  function($stateProvider, $urlRouteProvider){
    $urlRouteProvider.otherwise("/welcome");
    $stateProvider.state("welcome",{
      url: "/welcome",
      templateUrl : "html/welcome.html"
    })
  }
);