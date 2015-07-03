





    angular.module('app.home', ['ngNewRouter'])
    .controller('HomeController', ['$location', HomeController]);



function HomeController ($location) {

    this.data =
    {
        name: 'admin',
        password : 'password'
    };


    this.teacherlogin = function(){


        if(this.data.name == this.teacherusername && this.data.password == this.teacherpassword){


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