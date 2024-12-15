interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student: student = {
    firstName: 'Linda',
    lastName: "Nxumalo",
    age: 27,
    location: "Durban"
}

const student2: student = {
    firstName: 'Anothando',
    lastName: "Mvela",
    age: 18,
    location: "East London"
}

const student3: student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    location: "Cape Town"
}

const studentList = [student, student2, student3]

console.log(studentList[0].firstName)
console.log(studentList[0].location)
console.log(studentList[1].firstName)
console.log(studentList[1].location)