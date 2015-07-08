





    angular.module('app.home', ['ngNewRouter'])
    .controller('HomeController', ['$location','dataservice', HomeController]);



function HomeController ($location,dataservice) {

    this.teacherlogin = function(){

        for(i=0 ; i < dataservice.teacher.length ; i++) {

            if (dataservice.teacher[i].username == this.teacherusername && dataservice.teacher[i].password == this.teacherpassword) {

                dataservice.currentteacher = i;
                $location.path('/add');

            } else {
                alert("incorrect")
            }

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