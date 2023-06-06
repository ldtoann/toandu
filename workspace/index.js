var myApp = angular.module("myApp", ["firebase"]);
myApp.controller("myCtrl", function ($scope, $firebaseArray) {
  $scope.add = function () {
    firebase.database().ref("biography/cacthongtinkhactoan").set({
      thongtin1: "noidungtongtinthem1",
      anhthongtin1: "anhthongtinthem1",
      anhthongttoanananain1: "anhthongtinthem1",
      anhthongtasdasdasdasdsadin1: "anhthongtinthem1",
    });
  };
  $scope.load = function () {
    ref = fisebase.database().ref("biography/cacthongtinkhac1");
    ref.on("value", (snapshot) => {
      console.log(snapshot.val());
    });
  };
});
