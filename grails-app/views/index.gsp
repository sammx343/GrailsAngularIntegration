<!DOCTYPE html>
<html ng-app="myModule">
  <head>
    <title> Grails </title>

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="static/css/style.css">
  </head>
  <body>
    <ui-view></ui-view>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>
    <script type="text/javascript" src="static/libraries/pagination.js"></script>
    <script src="//unpkg.com/@uirouter/angularjs/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="static/javascript/app.js"></script>

    <script type="text/javascript" src="static/javascript/controller/userController.js"></script>
    <script type="text/javascript" src="static/javascript/service/userService.js"></script>
  </body>
</html>