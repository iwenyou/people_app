var people = [
  {
  name: "wen",
  bio: "Awesome guy",
  bioVisible: true
},
  {
  name: "dani",
  bio: "Awesome teacher",
  bioVisible: true
},
  {
  name: "annie",
  bio: "Awesome friend",
  bioVisible: true
},
  {
  name: "antony",
  bio: "Awesome TA",
  bioVisible: true
}
];

(function(){
  "use strict";

  angular.module("app").controller("profileCtrl", function($scope){

    $scope.profiles = people;

    $scope.changeStatus = function(index){
      if
    };

  });

}());
