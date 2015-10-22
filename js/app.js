'use strict';

Parse.initialize("232ArN0DP9XuNRssZUWWT7gbzeDAuyfXcVigBpU6","frgUWhqdHq70VIJtP2XeKH9baF7YGxEXTsIJkyjJ");

var myApp = angular.module('myApp', ['components', 'routes']);

myApp.controller('navigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
        return $location.path() == path;
    };
}]);

myApp.controller('parseController', ['$scope', function ($scope) {

    var Category = Parse.Object.extend("Category");
    var query = new Parse.Query(Category);
    //query.equalTo("category_name", "");
    query.find({
        success: function(results) {
            $scope.$apply(function() {
                // Do something with the returned Parse.Object values
                //console.log("Successfully retrieved " + results.length + " item");
                $scope.category = results.map(function(obj) {
                    return {objectId: obj.id, categoryName: obj.get("category_name"),  parseObject: obj};
                });
                //console.log($scope.category);
            });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

}]);

myApp.controller('customController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

    var Category = Parse.Object.extend("Category");
    var query = new Parse.Query(Category);
    //query.equalTo("category_name", "");
    query.find({
        success: function(results) {
            $scope.$apply(function() {
                // Do something with the returned Parse.Object values
                //console.log("Successfully retrieved " + results.length + " item");
                $scope.category = results.map(function(obj) {
                    return {objectId: obj.id, categoryName: obj.get("category_name"),  parseObject: obj};
                });
                //console.log($scope.category);
            });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    $scope.changeView = function(category){
        //console.log(category);
        var earl = '/custom/' + category.objectId;
        $location.path(earl);
    }

    console.log($routeParams.id);
}]);


myApp.controller('customIdController', ['$scope', '$routeParams', function ($scope, $routeParams) {

    //Parse Object with id
    var Category = Parse.Object.extend("Category");
    var query = new Parse.Query(Category);
    //query.equalTo("category_name", "");
    query.find({
        success: function(results) {
            $scope.$apply(function() {
                // Do something with the returned Parse.Object values
                //console.log("Successfully retrieved " + results.length + " item");
                $scope.category = results.map(function(obj) {
                    return {objectId: obj.id, categoryName: obj.get("category_name"),  parseObject: obj};
                });
                //console.log($scope.category);
            });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    console.log($routeParams.id);
}]);

myApp.controller ('homeController', ['$scope','$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

    // Three Columns content
    $scope.column = [
        {
            title: 'Heading',
            description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
            link: '#',
            textLink: 'View details »'
        },
        {
            title: 'Heading',
            description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
            link: '#',
            textLink: 'View details »'
        },
        {
            title: 'Heading',
            description: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
            link: '#',
            textLink: 'View details »'
        }
    ];

    $scope.secone = {
        heading: 'First featurette heading.',
        description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
    };

    $scope.sectwo = {
        section: 'apps',
        heading: 'Second featurette heading. ',
        description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
    };

    $scope.gotoApps = function() {
        $location.hash('apps');
        // call $anchorScroll()
        $anchorScroll();
    }

    $scope.secthree = {
        heading: 'Three featurette heading. ',
        description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
    };

}]);


myApp.controller ('aboutController', ['$scope', function ($scope) {

}]);

myApp.controller ('contactController', ['$scope', '$http', function ($scope, $http) {

    $scope.result = 'hidden';
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;

        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'lib/contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }

}]);