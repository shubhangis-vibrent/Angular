  //create module
  var myapp= angular.module("myapp", []) ;

  //create the controller
  var myController=function($scope){
   $scope.message="Hello Wolrd";
  }
  
  //register the controller with module
  myapp.controller("myController",myController);
 