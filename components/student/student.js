


angular.module('app.student', ['ngNewRouter'])
    .controller('StudentController', ['$location','dataservice', StudentController]);



function StudentController ($location,dataservice) {

    var teacherindex = dataservice.teacherindex;
    var studentindex = dataservice.studentindex;

    this.teacher = dataservice.teacher[teacherindex];

    this.std =     dataservice.teacher[teacherindex].students[studentindex];

    console.log(this.std);

/*
    this.tasks = std.task;
        console.log(this.tasks);

*/


}
