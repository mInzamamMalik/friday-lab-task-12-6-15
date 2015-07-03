/**
 * Created by hammad on 24/06/2015.
 */
app.controller('StudentprofileController',function(studentService,$rootScope){
    var info=studentService.getInfo();
    var id = $rootScope.id;
    for(var i=0;i<info.length;i++){
        if(info[i].rollNo == id){
            this.teachName=info[i].task.teacherName;
            this.subDate=info[i].task.submissionDate;
            this.task=info[i].task.text;
            var index=i;
        }
    }
    this.counter=1;
    this.checkboxModel = {
        value2 : 'completed'
    };
   // info[index].task.status=this.status;
    this.show = function(){
        alert(info[index].task.status);
    }
    this.viewPage=function()
    {
        var r = confirm("Are you Sure?");
        if (r == true) {
            studentService.goToPage('/home');
        } else {
        }
    };

   /* if(this.status==false){
        alert('pending');
    }
    else{
        alert('completed');
    }*/
});