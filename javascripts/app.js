var app = angular.module('portfolioApp', []);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'MainCtrl',
                templateUrl: 'partials/works.html'
            })
        .when('/about', {
             controller: 'MainCtrl',
                templateUrl: 'partials/works.html'
        })
        .when('/work', {
             controller: 'MainCtrl',
                templateUrl: 'partials/works.html'
        })
        .when('/contact', {
             controller: 'MainCtrl',
                templateUrl: 'partials/works.html'
        })

       // $locationProvider.html5Mode(true);
});

app.directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
});


app.run(function($rootScope, $location, $anchorScroll, $routeParams) {

  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {

      $('html, body').animate({
        scrollTop: $("#" + $routeParams.scrollTo).offset().top
      }, 400);
  });
})