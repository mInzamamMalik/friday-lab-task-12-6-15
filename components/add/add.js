/**
 * Created by 192.168.3.50 on 6/19/2015.
 */


angular.module('app.add', [])
    .controller('AddController', function () {

        this.teachername = 'Sir Ishaq Bhojani';

        this.store = [];




        this.done = function(){

            this.store.push({
                name :       this.name,
                roll :       this.roll,
                email :      this.email,
                password :   this.password,
                class :      this.class
            })


        };

        this.show = false;

        this.showhide = function(){


          if(this.show == false){
              this.show = true;
          }else{
              if(this.show == true){
                  this.show = false;
              }
          }


        }

    });