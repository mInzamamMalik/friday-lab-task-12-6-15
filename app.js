
/**
 * Created by 192.168.3.50 on 6/11/2015.
 */


    var app = angular.module('app', ['ngNewRouter','ngMaterial',
    'app.home','app.about','app.add','app.contact']);

        app.controller('AppController', ['$router', AppController]);

    AppController.$routeConfig = [
        { path: '/',        component: 'home' },
        { path: '/about',      component: 'about' },
        { path: '/contact',    component: 'contact' },
        { path: '/add',    component: 'add' },
        { path: '/detail/:id', component: 'detail' }
    ];

    function AppController ($router)
    {

    }















