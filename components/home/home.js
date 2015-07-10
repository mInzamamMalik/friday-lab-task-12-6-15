





    angular.module('app.home', ['ngNewRouter'])
    .controller('HomeController', ['$location','dataservice', HomeController]);



function HomeController ($location,dataservice) {

    this.teacherlogin = function(){

        for(var i=0 ; i < dataservice.teacher.length ; i++) {

            if (dataservice.teacher[i].username == this.teacherusername && dataservice.teacher[i].password == this.teacherpassword) {

                dataservice.currentteacher = i;
                $location.path('/add');

            } else {
                alert("incorrect")
            }
        }
    };
    this.stdemail = "malikasinger@gmail.com";
    this.stdpassword = 'password';

    this.stdlogin = function(){
        for(var i=0 ; i < dataservice.teacher.length ; i++) {
            for(var j=0 ; j < dataservice.teacher[i].students.length ; j++) {

                if (dataservice.teacher[i].students[j].email == this.stdemail
                    && dataservice.teacher[i].students[j].password == this.stdpassword){

                    dataservice.myteacher = i;
                    dataservice.currentstudent = j;

                    $location.path('/student');

                } else {
                    alert("incorrect")
                }
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