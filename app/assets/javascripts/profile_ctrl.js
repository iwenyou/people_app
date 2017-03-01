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

    $scope.addProfile = function(name, bio){
      var newPorfile = {
        name: name,
        bio: bio,
        bioVisible: false
      };
      $scope.profiles.push(newPorfile);
    };

    $scope.changeStatus = function(index){
      person.bioVisible = !profile.bioVisible;
    };

  });

}());
