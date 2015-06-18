/**
 * Created by 192.168.3.50 on 1/1/2012.
 */
angular.module('myApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('home',{
            url:'/',
            templateUrl:"component/home/home.html"
            controller:'myCtrl'

        })
        $urlRouterProvider.otherwise('/')
    })
.controller("homeCtrl",function(){
        $scope.in = function()
    })