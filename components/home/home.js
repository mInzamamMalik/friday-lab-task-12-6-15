





    angular.module('app.home', ['ngNewRouter'])
    .controller('HomeController', ['$location', HomeController]);



function HomeController ($location) {

    this.data =
    {
        name: 'admin',
        password : 'password'
    };


    this.login = function(){


        if(this.data.name == this.username && this.data.password == this.pass){


            $location.path('/add');

        }else{
            alert("incorrect")
        }




    };

    this.studentlogintab = function(){

        this.studentloginshow = true;
        this.teacherloginshow = false;
    };

    this.teacherlogintab = function(){
        this.teacherloginshow = true;
        this.studentloginshow = false;
    };
}