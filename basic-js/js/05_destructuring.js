// console.log("------ Destructuring ------");

// Array
// let items = ["Table", "Handphone", "computer"];

// Manual variable declaration
// let items1 = items[0];
// let items2 = items[1];
// let items3 = items[2];

// console.log(items1);
// console.log(items2);
// console.log(items3);

// Variable declaration with destructuring
// let [item_1, item_2, item_3] = items

// console.log(item_1);
// console.log(item_2);
// console.log(item_3);

// Object
// let student = {
//     name: "jp-yong", 
//     age: 24,
//     department: "Investor"
// }

// // Manual variable declaration 
// let studentName = student.name;
// let studentAge = student.age;
// let studentDepartment = student.department;

// console.log(studentName);
// console.log(studentAge);
// console.log(studentDepartment);

// Varible declaration with destructuring 
// let {name, age, department} = student;

// console.log(name);
// console.log(age);
// console.log(department); 

// Destructuring by providing aliases
// let {name: ObjectName, age: ObjectAge, department: ObjectDepartment} = student;

// console.log(ObjectName);
// console.log(ObjectAge);
// console.log(ObjectDepartment);

// Dsetructuring of a function's return value
// const studentData = () => {
//     return { name: "Metwhy", age: 20, department: "collage" }
// }

// let { 
//     name: studentNameData, 
//     age: studentAgeData, 
//     department: studentDepartmentData
// } = studentData();

// console.log(studentNameData);  
// console.log(studentAgeData); 
// console.log(studentDepartmentData);  