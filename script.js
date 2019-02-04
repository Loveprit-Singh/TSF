// Code goes here
var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = false;
  $scope.update = false;
  $scope.cancel = false;
//  $scope.userid = true;
  $scope.total = false;
  $scope.sub = false;
  $scope.rec=false;
  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: 'http://localhost:3000/course/'


  }).then(function successCallback(response) {

    $scope.users = response.data;
  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });


  //Create New User
  $scope.createUser = function() {
    var data = {

    name: $scope.name
    };
    //$http POST function
    $http.get('http://localhost:3000/course/update/', $scope.user._id).then(function successCallback(response) {

      alert("User has updated Successfully")

    }, function errorCallback(response) {

      alert("Error. while updating user Try Again!");

    });

  };



  //Update User
  // $scope.updateUser = function() {

  //   //$http PUT function
  //   $http({
  //       method: 'POST',
  //       url: 'http://localhost:3000/course/delete/',
  //       data: {'id':$scope.user._id}

  //     }).then(function successCallback(response) {
  // console.log($scope.user._id);
  // $scope.users.push(response.data);
  //       alert("User has created Successfully")

  //     }, function errorCallback(response) {

  //       alert("Error. while  Try Again!");

  //     });

  //   };
    $scope.updateUser = function(user) {

      //$http PUT function
      $http({
          method: 'POST',
          url: 'http://localhost:3000/course/delete/',
          data: {'name':$scope.user.name,
              'credits':$scope.user.credits+=parseInt(document.getElementById('money').value),
        }
        }).then(function successCallback(response) {
    console.log($scope.user._id);
    $scope.users.push(response.data);
          alert("User has created Successfully")
  
        }, function errorCallback(response) {
          console.log($scope.user._id);
          alert("Error. while  Try Again!");
  
        });
  
      };

  //Delete User
  $scope.deleteUser = function(user) {

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: 'http://dummy.restapiexample.com/api/v1/employees' + user.id

    }).then(function successCallback(response) {

      alert("User has deleted Successfully");
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });

  };

  //Set $scope on Edit button click
  $scope.editUser = function(user) {

    $scope.user = user;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.userid = false;
    $scope.total = true;
    $scope.sub = true;
    $scope.reciverCredits=false;
  };


  //cancel Uodate
  $scope.cancelUpdate = function() {
    $scope.user = null;
  //  $scope.userid = true;
    $scope.total = false;
    $scope.sub = false;
    $scope.update = false;
    $scope.cancel = false;
    //$scope.userid = true;
  };
  $scope.reciver=function(user)
  {
    $scope.user=user;
    $scope.reciverCredits=true;
    $scope.sub=false;
    //console.log($scope.user._id);
    $scope.user.credits+=parseInt(document.getElementById('money').value);
   console.log($scope.user.credits);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/course/delete/',
      data: {'name':$scope.user.name,
            'credits':$scope.user.credits
          //'value':parseInt(                                                                                                                                                                                            document.getElementById('money').value)
    }
    }).then(function successCallback(response) {
      console.log("its woriking");
            console.log($scope.user.name);
            console.log($scope.user.credits);
      alert("User has update Successfully");
    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });
  };

  //////////////////Shortcut methods for $http//////

  //$http GET
  //$http.get('https://jsonplaceholder.typicode.com/users', function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http POST
  //$http.post('https://jsonplaceholder.typicode.com/users', $scope.user, function successCallback(response) {
  //
  //  $scope.users.push(response.data);
  //alert("User has created Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while created user Try Again!");
  //
  //});


  //$http PUT
  //$htp.put('https://jsonplaceholder.typicode.com/users/' + $scope.user.id, $scope.user, function successCallback(response) {
  //
  //  alert("User has updated Successfully")
  //
  //}, function errorCallback(response) {
  //
  //  alert("Error. while updating user Try Again!");
  //
  //});


  //$http DELETE
  //$http.delete('https://jsonplaceholder.typicode.com/users/' + user.id, function successCallback(response) {
  //
  //  alert("User has deleted Successfully");
  //var index = $scope.users.indexOf(user);
  //$scope.users.splice(index, 1);
  //
  //  }, function errorCallback(response) {
  //
  //  alert("Error. while deleting user Try Again!");
  //
  //  });


}]);
