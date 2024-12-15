
interface Teacher {
    firstName: string;               
    lastName: string;                
    fullTimeEmployee: boolean;             
    location: string;                
    [key: string]: any;              
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;         
  }
  

  const teacher1: Teacher = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Pretoria',
    contract: true, 
  };
  
  console.log(teacher1);
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Durban',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  

  console.log(printTeacher("Jane", "Doe"));   
  console.log(printTeacher("John", "Doe")); 
  

  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  

  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  

  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  
  const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
  
  console.log(student.displayName());       
  console.log(student.workOnHomework());  
  console.log(student);