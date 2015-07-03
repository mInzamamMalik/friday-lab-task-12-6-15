/**
 * Created by 192.168.3.14 on 6/12/2015.
 */
app.controller('HomeController',function($location){

});

app.controller('teacherLogin',function(adminService,studentService){

    var data = adminService.adminLogin();
    this.login = function(){
        if(this.email === data.email && this.password === data.password)
        {
            alert('ok');
            studentService.goToPage('/teacherprofile')
        }
        else{
            alert("Not Ok!");
        }
    }

});
app.controller('studentLogin',function(studentService,$rootScope){
    this.detail=studentService.getInfo();
    this.login = function(){
        for(var i=0; i<this.detail.length ; i++){
            if(this.rollNo == this.detail[i].rollNo && this.password == this.detail[i].password)
            {
                alert('ok');
                $rootScope.id=this.rollNo;
                studentService.goToPage('/studentprofile');
            }
    }
}
});

app.service('adminService',function(){
    var admin = {
        email : 'admin@admin.com',
        password : '123'
    };
    this.adminLogin = function(){
        return admin;
    }
});


