namespace Subjects {
    export class Cpp extends Subjects {
      teacher: any;
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
}
  