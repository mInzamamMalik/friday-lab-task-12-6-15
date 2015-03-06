



angular.module('app.home', [])
    .controller('HomeController', [function () {
    data =
    {
        name: 'admin',
        password : 'password'
    };

        this.login = function(){








            alert("fdgf");






        };

        this.studentlogintab = function(){

            $scope.studentloginshow = true;
            $scope.teacherloginshow = false;
        };

        this.teacherlogintab = function(){
            $scope.teacherloginshow = true;
            $scope.studentloginshow = false;
        };

    }]);