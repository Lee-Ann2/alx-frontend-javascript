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