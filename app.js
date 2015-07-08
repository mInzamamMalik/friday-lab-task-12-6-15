
/**
 * Created by 192.168.3.50 on 6/11/2015.
 */


    var app = angular.module('app', ['ngNewRouter','ngMaterial',
    'app.home','app.add','app.student']);

        app.controller('AppController', ['$router', AppController]);

    AppController.$routeConfig = [
        { path: '/',        component: 'home' },
        { path: '/add',    component: 'add' },
        { path: '/student',    component: 'student' },
        { path: '/detail/:id', component: 'detail' }
    ];

    function AppController ($router)
    {

    };

    app.service("dataservice",function(){

        var teacher = [
            {
                name: "Ishaq Bhojani",
                username : "admin",
                password : "password",
                student : [
                    {
                        name : "Inzamam Malik",
                        roll : "2225",
                        email : "malikasinger@gmail.com",
                        password : "password",
                        class : "mass training",
                        task : [
                            {
                                taskstring : "make a webpage using angular",
                                done : "true"
                            }
                        ]
                    }
                ]

            }
        ]


    });















