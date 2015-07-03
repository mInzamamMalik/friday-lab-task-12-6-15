/**
 * Created by 192.168.3.14 on 6/12/2015.
 */
var app = angular.module('myApp',['ngNewRouter','ngMaterial']);

app.controller('Login',function($router){
    $router.config([
        {path:'/', redirectTo:'home'},
        {path:'/home', component:'home'},
        {path:'/teacherprofile', component:'teacherprofile'},
        {path:'/studentprofile', component:'studentprofile'}
    ]);
});


