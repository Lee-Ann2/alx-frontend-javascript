import { Subjects } from './Cpp'; 
import { Teacher } from './Teacher'; 
import { Subjects as ReactSubjects } from './React'; 
import { Subjects as JavaSubjects } from './Java'; 

export const cTeacher: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  experienceTeachingC: 25
};

export const cpp = new Subjects.Cpp(cTeacher);
export const java = new JavaSubjects.Java(cTeacher);
export const react = new ReactSubjects.React(cTeacher);


console.log('C++');
console.log(cpp.getRequirements()); 
console.log(cpp.getAvailableTeacher()); 

console.log('Java');
console.log(java.getRequirements()); 
console.log(java.getAvailableTeacher()); 

console.log('React');
console.log(react.getRequirements()); 
console.log(react.getAvailableTeacher()); 