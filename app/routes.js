app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      templateUrl: "app/partials/home.html",
      url: "/home",
      controller: "mainCtrl",
      data: {
        authLevel: "logged_in"
      }
    })
    .state("blank", {
      templateUrl: "app/partials/blank.html",
      url: "/blank",
      controller: "mainCtrl",
      data: {
        authLevel: "logged_in"
      }
    })

    .state("auth:sign_in", {
      templateUrl: "app/partials/auth/sign-in.html",
      url: "/auth/sign-in",
      controller: "authCtrl",
      data: {
        authLevel: "not_logged_in"
      }
    })
    .state("auth:sign_up", {
      templateUrl: "app/partials/auth/sign-up.html",
      url: "/auth/sign-up",
      controller: "authCtrl",
      data: {
        authLevel: "not_logged_in"
      }
    })

    .state("default", {
      templateUrl: "app/partials/home.html",
      url: "/",
      controller: "mainCtrl",
      data: {
        authLevel: "logged_in"
      }
    });

  $urlRouterProvider.otherwise("/home");
});
