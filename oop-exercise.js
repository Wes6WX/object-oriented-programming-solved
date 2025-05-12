/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
}

Student.prototype.addGrade = function (grade) {
  if ((grade > 100) | (grade < 0)) {
    console.log("Grade must be between 0 and 100.");
  } else {
    this.grades.push(grade);
  }
};

Student.prototype.calculateAverageGrade = function () {
  if (this.grades.length == 0) {
    return 0;
  } else {
    return this.grades.reduce((acc, cur) => acc + cur) / this.grades.length;
  }
};

Student.prototype.hasPassed = function (passingGrade) {
  if (this.calculateAverageGrade() >= passingGrade) {
    return true;
  }
  return false;
};

Student.prototype.getName = function () {
  return this.name;
};

Student.prototype.getAge = function () {
  return this.age;
};

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }
}

Course.prototype.enrollStudent = function (student) {
  this.students.push(student);
};

Course.prototype.listStudents = function () {
  return this.students;
};

Course.prototype.calculateCourseAverage = function () {
  if (this.students.length == 0) {
    return 0;
  } else {
    return (
      this.students.reduce(
        (acc, student) => acc + student.calculateAverageGrade(),
        0
      ) / this.students.length
    );
  }
};

const student1 = new Student("Wesley Alexander", 32);
const student2 = new Student("Frank Mendelez", 27);
const student3 = new Student("John Summerhays", 29);
const student4 = new Student("Javian Williams", 26);
const student5 = new Student("Marcus Martin", 32);

const course1 = new Course("Coding");
const course2 = new Course("Gaming");

// student1.addGrade(120);
// student1.addGrade(-5);
student1.addGrade(90);
student1.addGrade(96);
student1.addGrade(100);
student2.addGrade(95);
student2.addGrade(85);
student2.addGrade(75);
student3.addGrade(70);
student3.addGrade(20);
student3.addGrade(50);
student3.addGrade(60);
student4.addGrade(50);
student4.addGrade(100);
student5.addGrade(80);
student5.addGrade(85);

course1.enrollStudent(student1);
course1.enrollStudent(student4);
course2.enrollStudent(student1);
course2.enrollStudent(student2);
course2.enrollStudent(student3);
course2.enrollStudent(student4);
course2.enrollStudent(student5);

// console.log(student1, student2, student3, student4, student5);
// console.log(student1.calculateAverageGrade());
// console.log(student1.hasPassed(85));
// console.log(student2.calculateAverageGrade());
// console.log(student2.hasPassed(85));
// console.log(student3.calculateAverageGrade());
// console.log(student3.hasPassed(85));
// console.log(student1.getName());
// console.log(student3.getName());
// console.log(student3.getAge());
// console.log(course1, course2);
// console.log(course2.listStudents());
// console.log(course1.calculateCourseAverage());
// console.log(course2.calculateCourseAverage());
