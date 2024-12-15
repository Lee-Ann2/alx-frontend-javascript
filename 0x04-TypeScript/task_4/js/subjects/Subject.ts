namespace Subjects {
    export class Subject {
      teacher: Teacher;
  
      constructor({ teacher }: { teacher: Teacher; }) {
        this.teacher = teacher;
      }
  
      setTeacher({ teacher }: { teacher: Teacher; }): void {
        this.teacher = teacher;
      }
    }
}
  