var app = angular.module("sampleApp", []);

app.controller("sampleController", function($scope){

  $scope.items = [
    { type: "beer", brand: "miller"},
    { type: "beer", brand: "coors"},
    { type: "beer", brand: "bud"},
    { type: "beer", brand: "busch"},
  ];

  var another_message = "World"

});

app.controller("anotherController", function($scope){


});


