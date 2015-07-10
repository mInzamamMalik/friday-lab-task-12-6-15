/**
 * Created by 192.168.3.50 on 6/19/2015.
 */


angular.module('app.add', [])
    .controller('AddController', function(dataservice) {

        var index = dataservice.currentteacher;
        this.teachername = dataservice.teacher[index].name;

        this.done = function(){

            dataservice.teacher[index].students.push(
                {
                    name :       this.name,
                    roll :       this.roll,
                    email :      this.email,
                    password :   this.password,
                    class :      this.class

                }
            )


        };
        this.students = dataservice.teacher[index].students;

        this.show = false;
        this.showstd = false;

        this.showhide = function(){
          if(this.show == false){
              this.show = true;
          }else{
              if(this.show == true){
                  this.show = false;
              }
          }
        };
        this.showhidestd = function () {
            if (this.showstd == false) {
                this.showstd = true;
            } else {
                if (this.showstd == true) {
                    this.showstd = false;
                }
            }
        }

    });