
/**
 * Created by 192.168.3.50 on 6/11/2015.
 */

var app = angular.module("myapp",["ngMaterial"]);
app.controller("myctrl",function($scope){



    $scope.studentlogintab = function(){

        $scope.studentloginshow = true;
        $scope.teacherloginshow = false;


    };
    $scope.teacherlogintab = function(){

        $scope.teacherloginshow = true;
        $scope.studentloginshow = false;
    };



});

