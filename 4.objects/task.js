function Student(name, gender, age, marks) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if (!this.marks){
      return;
    }  
    this.marks.push(...marks);
  }
  
  Student.prototype.getAverage = function () {
      if (!this.marks || this.marks.length === 0){
          return 0;
      }
          const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
          const length = this.marks.length;
          return sum / length;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }