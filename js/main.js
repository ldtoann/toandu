var app = angular.module("myApp", ["ngRoute", "firebase"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "AboutController",
    })
    .when("/achievement", {
      templateUrl: "achievement.html",
      controller: "AchievementController",
    })
    .when("/event", {
      templateUrl: "event.html",
      controller: "EventController",
    })
    .when("/product", {
      templateUrl: "product.html",
      controller: "ProductController",
    })
    .when("/imagemore", {
      templateUrl: "imagemore.html",
      controller: "ImagemoreController",
    })
    .when("/sitemap", {
      templateUrl: "sitemap.html",
      controller: "SitemapController",
    });
});
/**
 * Service rest api
 */
function showProgress() {
  var loader = document.querySelector(".loader");
  loader.style.display = "block";
}

function hideProgress() {
  var loader = document.querySelector(".loader");
  loader.style.display = "none";
}

app.service("RestApi", function () {
  this.load = function (page) {
    showProgress();
    return firebase.database().ref(`biography/${page}`);
  };
});

/**
 * Controller for Pages
 */
app.controller("HomeController", function ($scope, RestApi) {
  init();
  function init() {
    RestApi.load("home").on("value", (snapshot) => {
      hideProgress();
      $scope.home = snapshot.val();
      $scope.$apply();
    });
  }
  $scope.countVisitor = localStorage.getItem("count_visitor");

  $scope.isLoading = true;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        $scope.position = pos;
        $scope.$apply();

        loader.style.display = "none";
      });
    } else {
      console.log("not support geo");
    }
  }
});

app.controller("AboutController", function ($scope, RestApi) {
  init();
  function init() {
    RestApi.load("about").on("value", (snapshot) => {
      hideProgress();
      $scope.about = snapshot.val();
      $scope.$apply();
    });
  }
});

app.controller("AchievementController", function ($scope, RestApi) {
  init();
  function init() {
    RestApi.load("awards").on("value", (snapshot) => {
      $scope.awards = [];
      Object.values(snapshot.val()).forEach((award) => {
        $scope.awards.push(award);
      });

      hideProgress();
      $scope.$apply();
    });
  }
});

app.controller(
  "EventController",
  function ($scope, RestApi, $location, $anchorScroll) {
    init();

    function init() {
      RestApi.load("events").on("value", (snapshot) => {
        $scope.events = [];
        Object.values(snapshot.val()).forEach((event) => {
          $scope.events.push(event);
        });

        hideProgress();
        $scope.$apply();
      });
    }

    $scope.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };
  }
);

app.controller("ProductController", function ($scope, RestApi) {
  init();
  function init() {
    RestApi.load("products").on("value", (snapshot) => {
      $scope.products = [];
      Object.values(snapshot.val()).forEach((product) => {
        $scope.products.push(product);
      });

      hideProgress();
      $scope.$apply();
    });
  }
});

app.controller("ImagemoreController", function ($scope, RestApi) {
  init();
  function init() {
    RestApi.load("images").on("value", (snapshot) => {
      $scope.images = snapshot.val();

      hideProgress();
      $scope.$apply();
    });
  }
});
// -----------------------------------------------------------------------------------------------------------------

function countVisitors() {
  if (localStorage.getItem("count") !== null) {
    // Lấy giá trị count từ Local Storage nếu có
    var count = parseInt(localStorage.getItem("count"));
  } else {
    // Nếu không có, set count bằng 0
    var count = 0;
  }

  // Tăng giá trị count lên 1 và lưu vào Local Storage
  count++;
  localStorage.setItem("count", count);

  // Hiển thị giá trị count trên trang web
  document.getElementById("count").textContent = count;
}

// Gọi hàm countVisitors khi trang web được load
countVisitors();
// -----------------------------------------------------------------------------------------------------------------

// directive
app.directive("movieProduct", function () {
  return {
    templateUrl: "directive/movie-product.html",
  };
});
app.directive("musicProduct", function () {
  return {
    templateUrl: "directive/music-product.html",
  };
});
// -----------------------------------------------------------------------------------------------------------------
function showDateTime() {
  // lấy ngày giờ hiện tại
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hour = currentDate.getHours();
  var min = currentDate.getMinutes();
  var sec = currentDate.getSeconds();

  // hiển thị ngày giờ
  var dateTime =
    day +
    "/" +
    month +
    "/" +
    year +
    "  --  DAY : " +
    hour +
    ":" +
    min +
    ":" +
    sec;
  document.getElementById("datetime").innerHTML = " TIME : " + dateTime;

  // lấy vị trí hiện tại
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // hiển thị vị trí
    var location = "     --  API : " + lat + ", " + lon;
    document.getElementById("location").innerHTML = location;
  });
}

// gọi hàm hiển thị ngày giờ và vị trí hiện tại mỗi giây
setInterval(showDateTime, 1000);

// -----------------------------------------------------------------------------------------------------------------
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtop").fadeIn();
    } else {
      $("#backtop").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html,  body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});
// -----------------------------------------------------------------------------------------------------------------
// window.addEventListener("load", function () {
//   loadingProgress();
// });

// function loadingProgress() {
//   var loader = document.querySelector(".loader");
//   var content = document.querySelector(".content");
//   setTimeout(function () {
//     loader.style.display = "none";
//     content.classList.remove("hidden");
//   }, 2000);
// }
