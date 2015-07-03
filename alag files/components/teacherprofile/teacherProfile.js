/**
 * Created by 192.168.3.14 on 6/12/2015.
 */
app.controller('TeacherprofileController',function(studentService){
    var t=this;
    t.flag=false;
    t.flag2=false;
    t.show = false;
    this.arr = studentService.getInfo();
    this.add = function(){
        t.flag=true;
        t.flag2=false;

    };
    this.addStudent=function()
    {
        this.studentData = {
            name:this.name,
            age:this.age,
            rollNo:this.rollNo,
            password:this.password,
            task:
            {
                text:'No Task Available',
                teacherName:'',
                submissionDate:'',
                status:''
            }
        };

        studentService.Data(this.studentData);
        alert('Registered');
        this.name='';
        this.age='';
        this.rollNo='';
        this.password='';
    };

    this.viewPage=function()
    {
        var r = confirm("Are you Sure?");
        if (r == true) {
            studentService.goToPage('/home');
        } else {
        }
    };
    this.viewStd = function(){
        t.flag2=true;
        t.flag=false;
    };
    this.Delete=function(index){
        var arr = studentService.getInfo();
        var r = confirm("Are you Sure?");
        if (r == true) {
            arr.splice(index,1);
        } else {
        }

    };
    this.giveTask=function(index){
        var task = prompt('Please Enter a Task');
        var name = prompt('Please Enter Your Name');
        var date = prompt('Please Enter Submission Date');
        this.student=studentService.getInfo();
        this.student[index].task.text = task;
        this.student[index].task.teacherName = name;
        this.student[index].task.submissionDate = date;
        console.log(studentService.getInfo());
    };
    this.edit=function(index){
        t.show = true;
        var arr=studentService.getInfo();
        this.Name=arr[index].name;
        this.Age=arr[index].age;
        this.RollNo=arr[index].rollNo;
        this.Task=arr[index].task;
        };

    this.saveData= function(index){
        var newData={
            name:this.Name,
            age:this.Age,
            rollNo:this.RollNo,
            task:this.Task
        };
        studentService.saveData(index,newData);
        t.show=false;
    }
});

app.service('studentService',function($location){
    var arr=[];
    this.Data = function(studentObj){
        arr.push(studentObj);
        console.log(arr);
    };
    this.getInfo = function(){
        return arr;
    };
    this.saveData=function(index,editedData){
        arr.splice(index,1,editedData);
        console.log(editedData);
    };
    this.goToPage = function(go){
        $location.path(go);
    };
});