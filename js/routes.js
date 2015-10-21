angular.module('routes', ['ngRoute'])

    .constant('CONFIG', {
        'APP_NAME' : "My first site on AngularJS",
        'APP_VERSION' : '1.0',
        'BASE_URL' : ''
    })

    .factory('GenerealService', function () {
        return {
            app : 'anonymous'
        }
    })

    .config(function ($routeProvider) {

        $routeProvider

            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })

            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })

            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            })

    });