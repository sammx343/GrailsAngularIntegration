angular.module("myModule")
.factory('UserService', function($http){
  return{
    register : function(user){
      return $http({method : 'POST', url:'user/register', data: user})
    },

    userList : function(){
      return $http({method : 'GET', url:'user/userList'})
    }
  }
});