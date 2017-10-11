angular.module("myModule")
.controller("userController", function($rootScope, $scope, $location, $timeout,UserService){

  $scope.register = function(user){
    $scope.showMessage = true;
    UserService.register(user).then(function(response){
      console.log(response);
      $scope.successMessage = response.data.message;
      $location.path("/");
      $scope.user = {};
      $timeout(function(){
        $scope.userList();
        $scope.showMessage = false;
      }, 1000)
    })
    
  }

  $scope.userList = function(){
    UserService.userList().then(function(response){
      $scope.users = response.data.users;
    })
  };

  $scope.sortColumn = "fullName";
  $scope.reverseSort = true;

  $scope.sortData = function(column){
    $scope.reverseSort = ($scope.sortColumn == column)? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };

  $scope.getSortClass = function(column){
    if ($scope.sortColumn == column){
      return $scope.reverseSort ? "arrow-down" : "arrow-up"; 
    }
    return '';
  };
})
