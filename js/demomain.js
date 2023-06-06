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
    })
    .when("/event", {
      templateUrl: "event.html",
    })
    .when("/product", {
      templateUrl: "product.html",
      controller: "ProductController",
    });
});

app.controller("HomeController", function ($scope) {
  $scope.load = function () {
    ref = firebase.database().ref("biography");
    ref.on("value", (snapshot) => {
      biography = snapshot.val();
      // about
      $scope.Name = biography.home.about.Name;
      $scope.Age = biography.home.about.Age;
      $scope.DateOfBirth = biography.home.about.DateOfBirth;
      $scope.DateOfDeath = biography.home.about.DateOfDeath;
      $scope.Job = biography.home.about.Job;
      $scope.BirthPlace = biography.home.about.BirthPlace;
      $scope.Textabout1 = biography.home.about.Textabout1;
      $scope.Textabout2 = biography.home.about.Textabout2;
      //avhievement
      $scope.Textachievement = biography.home.achievement.Textachievement;
      $scope.NameAward1 = biography.home.achievement.Award1.NameAward1;
      $scope.NameAward2 = biography.home.achievement.Award2.NameAward2;
      $scope.NameAward3 = biography.home.achievement.Award3.NameAward3;
      $scope.NameAwardMore =
        biography.home.achievement.AwardMoreTotal.NameAwardMore;
      $scope.TotalAward1 = biography.home.achievement.Award1.TotalAward1;
      $scope.TotalAward2 = biography.home.achievement.Award2.TotalAward2;
      $scope.TotalAward3 = biography.home.achievement.Award3.TotalAward3;
      $scope.TotalAwardMore =
        biography.home.achievement.AwardMoreTotal.TotalAwardMore;
      //art style
      $scope.Textartstyle = biography.home.artstyle.Textartstyle;
      $scope.Textvocals = biography.home.artstyle.Vocals.Textvocals;
      $scope.Textthemeandgenres =
        biography.home.artstyle.ThemeAndGenres.Textthemeandgenres;
      $scope.Textmusicanddancevideo =
        biography.home.artstyle.MusicAndDanceVideo.Textmusicanddancevideo;
      $scope.Textinfluence = biography.home.artstyle.Influence.Textinfluence;
      $scope.Artist1 = biography.home.artstyle.Influence.Artist1;
      $scope.Artist2 = biography.home.artstyle.Influence.Artist2;
      $scope.Artist3 = biography.home.artstyle.Influence.Artist3;
      $scope.Artist4 = biography.home.artstyle.Influence.Artist4;
      $scope.Artist5 = biography.home.artstyle.Influence.Artist5;
      $scope.Artist6 = biography.home.artstyle.Influence.Artist6;
      $scope.Artist7 = biography.home.artstyle.Influence.Artist7;
      $scope.Artist8 = biography.home.artstyle.Influence.Artist8;
      $scope.Artist9 = biography.home.artstyle.Influence.Artist9;
      $scope.Artist10 = biography.home.artstyle.Influence.Artist10;
      //event
      $scope.Textevent = biography.home.event.Textevent;
      $scope.Titleevent1 = biography.home.event.Event1.Titleevent1;
      $scope.Textevent1 = biography.home.event.Event1.Textevent1;
      $scope.Titleevent2 = biography.home.event.Event2.Titleevent2;
      $scope.Textevent2 = biography.home.event.Event2.Textevent2;
      $scope.Titleevent3 = biography.home.event.Event3.Titleevent3;
      $scope.Textevent3 = biography.home.event.Event3.Textevent3;
      $scope.Titleevent4 = biography.home.event.Event4.Titleevent4;
      $scope.Textevent4 = biography.home.event.Event4.Textevent4;
      $scope.Titlevent5 = biography.home.event.Event5.Titleevent5;
      $scope.Textevent5 = biography.home.event.Event5.Textevent5;
      $scope.Titleevent6 = biography.home.event.Event6.Titleevent6;
      $scope.Textevent6 = biography.home.event.Event6.Textevent6;
      //product
      $scope.Textproduct = biography.home.product.Textproduct;
      $scope.Titlemusic1 = biography.home.product.Music1.Titelmusic1;
      $scope.Textmusic1 = biography.home.product.Music1.Textlmusic1;
      $scope.Titlemusic2 = biography.home.product.Music2.Titelmusic2;
      $scope.Textmusic2 = biography.home.product.Music2.Textlmusic2;
      $scope.Titlemusic3 = biography.home.product.Music3.Titelmusic3;
      $scope.Textmusic3 = biography.home.product.Music3.Textlmusic3;
      $scope.Titelmovie1 = biography.home.product.Movie1.Titelmovie1;
      $scope.Textlmovie1 = biography.home.product.Movie1.Textlmovie1;
      $scope.Titelmovie2 = biography.home.product.Movie2.Titelmovie2;
      $scope.Textlmovie2 = biography.home.product.Movie2.Textlmovie2;
      $scope.Titelmovie3 = biography.home.product.Movie3.Titelmovie3;
      $scope.Textlmovie3 = biography.home.product.Movie3.Textlmovie3;
    });
  };
});
app.controller("AboutController", function ($scope) {
  $scope.load = function () {
    ref = firebase.database().ref("biography");
    ref.on("value", (snapshot) => {
      biography = snapshot.val();
      // about
      $scope.Name = biography.about.ABOUTS.Name;
      $scope.Age = biography.about.ABOUTS.Age;
      $scope.DateOfBirth = biography.about.ABOUTS.DateOfBirth;
      $scope.DateOfDeath = biography.about.ABOUTS.DateOfDeath;
      $scope.Job = biography.about.ABOUTS.Job;
      $scope.BirthPlace = biography.about.ABOUTS.BirthPlace;
      $scope.TextAbout1 = biography.about.ABOUTS.TextAbout1;
      $scope.TextAbout2 = biography.about.ABOUTS.TextAbout2;
      $scope.TextAbout3 = biography.about.ABOUTS.TextAbout3;
      $scope.TitleAbout1 = biography.about.ABOUTS.TitleAbout1;
      $scope.TitleAbout2 = biography.about.ABOUTS.TitleAbout2;
      // progress
      $scope.Textearlylife =
        biography.about.PROGRESS.CHILDHOODANDEARLYLIFE.Textearlylife;
      $scope.Texthowmuch =
        biography.about.PROGRESS.HOWMUCHMUSICAWARDS.Texthowmuch;
      $scope.Textfamililife =
        biography.about.PROGRESS.FAMILYLIFE.Textfamililife;
      $scope.Textjob = biography.about.PROGRESS.JOB.Textjob;
      $scope.Textmonstroushobby =
        biography.about.PROGRESS.MICHAELJACKSONMONSTROUSHOBBY.Textmonstroushobby;
      $scope.Textthemainproject =
        biography.about.PROGRESS.THEMAINPROJECTS.Textthemainproject;
    });
  };
});
app.controller("ProductController", function ($scope) {
  $scope.load = function () {
    ref = firebase.database().ref("biography");
    ref.on("value", (snapshot) => {
      biography = snapshot.val();
      // PRODUCT MUSIC
      $scope.Textproductmusic = biography.product.Productmusic.Textproductmusic;
      $scope.Textproductmusic1 =
        biography.product.Productmusic.Productmusic1.Textproductmusic1;
      $scope.Titleproductmusic1 =
        biography.product.Productmusic.Productmusic1.Titleproductmusic1;
      $scope.Textproductmusic2 =
        biography.product.Productmusic.Productmusic2.Textproductmusic2;
      $scope.Titleproductmusic2 =
        biography.product.Productmusic.Productmusic2.Titleproductmusic2;
      $scope.Textproductmusic3 =
        biography.product.Productmusic.Productmusic3.Textproductmusic3;
      $scope.Titleproductmusic3 =
        biography.product.Productmusic.Productmusic3.Titleproductmusic3;
      $scope.Textproductmusic4 =
        biography.product.Productmusic.Productmusic4.Textproductmusic4;
      $scope.Titleproductmusic4 =
        biography.product.Productmusic.Productmusic4.Titleproductmusic4;
      $scope.Textproductmusic5 =
        biography.product.Productmusic.Productmusic5.Textproductmusic5;
      $scope.Titleproductmusic5 =
        biography.product.Productmusic.Productmusic5.Titleproductmusic5;
      $scope.Textproductmusic6 =
        biography.product.Productmusic.Productmusic6.Textproductmusic6;
      $scope.Titleproductmusic6 =
        biography.product.Productmusic.Productmusic6.Titleproductmusic6;
      $scope.Textproductmusic7 =
        biography.product.Productmusic.Productmusic7.Textproductmusic7;
      $scope.Titleproductmusic7 =
        biography.product.Productmusic.Productmusic7.Titleproductmusic7;
      $scope.Textproductmusic8 =
        biography.product.Productmusic.Productmusic8.Textproductmusic8;
      $scope.Titleproductmusic8 =
        biography.product.Productmusic.Productmusic8.Titleproductmusic8;
      $scope.Textproductmusic9 =
        biography.product.Productmusic.Productmusic9.Textproductmusic9;
      $scope.Titleproductmusic9 =
        biography.product.Productmusic.Productmusic9.Titleproductmusic9;
      // PRODUCT MOVIE
      $scope.Textproductmovie = biography.product.Productmovie.Textproductmovie;
      $scope.Textproductmovie1 =
        biography.product.Productmovie.Productmovie1.Textproductmovie1;
      $scope.Titleproductmovie1 =
        biography.product.Productmovie.Productmovie1.Titleproductmovie1;
      $scope.Textproductmovie2 =
        biography.product.Productmovie.Productmovie2.Textproductmovie2;
      $scope.Titleproductmovie2 =
        biography.product.Productmovie.Productmovie2.Titleproductmovie2;
      $scope.Textproductmovie3 =
        biography.product.Productmovie.Productmovie3.Textproductmovie3;
      $scope.Titleproductmovie3 =
        biography.product.Productmovie.Productmovie3.Titleproductmovie3;
      $scope.Textproductmovie4 =
        biography.product.Productmovie.Productmovie4.Textproductmovie4;
      $scope.Titleproductmovie4 =
        biography.product.Productmovie.Productmovie4.Titleproductmovie4;
      $scope.Textproductmovie5 =
        biography.product.Productmovie.Productmovie5.Textproductmovie5;
      $scope.Titleproductmovie5 =
        biography.product.Productmovie.Productmovie5.Titleproductmovie5;
      $scope.Textproductmovie6 =
        biography.product.Productmovie.Productmovie6.Textproductmovie6;
      $scope.Titleproductmovie6 =
        biography.product.Productmovie.Productmovie6.Titleproductmovie6;
      $scope.Textproductmovie7 =
        biography.product.Productmovie.Productmovie7.Textproductmovie7;
      $scope.Titleproductmovie7 =
        biography.product.Productmovie.Productmovie7.Titleproductmovie7;
      $scope.Textproductmovie8 =
        biography.product.Productmovie.Productmovie8.Textproductmovie8;
      $scope.Titleproductmovie8 =
        biography.product.Productmovie.Productmovie8.Titleproductmovie8;
      $scope.Textproductmovie9 =
        biography.product.Productmovie.Productmovie9.Textproductmovie9;
      $scope.Titleproductmovie9 =
        biography.product.Productmovie.Productmovie9.Titleproductmovie9;
      $scope.Textproductmovie10 =
        biography.product.Productmovie.Productmovie10.Textproductmovie10;
      $scope.Titleproductmovie10 =
        biography.product.Productmovie.Productmovie10.Titleproductmovie10;
    });
  };
});
