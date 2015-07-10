


angular.module('app.student', ['ngNewRouter'])
    .controller('StudentController', ['$location','dataservice', StudentController]);



function StudentController ($location,dataservice) {
var teacherindex = dataservice.myteacher;

this.teacher = dataservice.teacher[teacherindex];
this.std = teacher.student[currentstudent];
this.tasks = std.task;
    console.log(this.tasks);




}
