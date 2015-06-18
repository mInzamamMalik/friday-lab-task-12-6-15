/**
 * Created by 192.168.3.50 on 6/19/2015.
 */
angular.module('app.contact', [])
    .controller('ContactController', function () {
        this.name = 'Friend';
        this.abc = function(){
            alert("abc");
        }
    });