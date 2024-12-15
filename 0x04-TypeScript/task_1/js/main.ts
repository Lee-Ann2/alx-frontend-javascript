interface Teacher {
    firstName: string;
    fullTimeEployee: Boolean;
    lastName: string;
    location: string;
    contract: Boolean;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    contract: false,
    fullTimeEployee: undefined
};
  
  console.log(teacher3);


interface Directors {
    firstName: string;
    lastName: string;
    location: string;
    fullTimeEmployee: Boolean;
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);