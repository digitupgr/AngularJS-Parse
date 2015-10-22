angular.module('components', [])
    .directive("threeColumns", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: 'directives/threeColumnsFunction.html',
            replace: true,
            scope: {
                // = : object
                columnsObject: "="
            }
        };
    })

    .directive("leftSection", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: 'directives/leftSection.html',
            replace: true,
            scope: {
                // @ : text
                leftHeading: "@",
                leftDescription: "@"
            }
        };
    })

    .directive("rightSection", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: 'directives/rightSection.html',
            replace: true,
            scope: {
                // @ : text
                rightSection: "@",
                rightHeading: "@",
                rightDescription: "@"
            }
        };
    })

    .directive("parse", function () {
        return {
            //restrict: 'ACM',
            restrict: 'E',
            templateUrl: 'directives/parse.html',
            replace: true,
            scope: {
                // = : object
                categoriesObject: "="
            }
            //},
            //link: function(scope, elem, attrs) {
            //    scope.changeView  = function(category){
            //        var earl = '/parse/' + category.id;
            //        //location.path(earl);
            //        console.log(earl);
            //    }
            //}
        };
    });