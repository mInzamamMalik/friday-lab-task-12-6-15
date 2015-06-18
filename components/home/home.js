



angular.module('app.home', [])
    .controller('HomeController', [function () {

        this.studentlogintab = function(){

            $scope.studentloginshow = true;
            $scope.teacherloginshow = false;


        };
        this.teacherlogintab = function(){

            $scope.teacherloginshow = true;
            $scope.studentloginshow = false;
        };

    }]);