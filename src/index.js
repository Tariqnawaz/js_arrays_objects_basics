import "./styles.css";
import { emp } from "./employeeData";

//console.log(JSON.stringify(emp, null, 2));
console.log(Array.isArray(emp));
//let emp1 = emp.slice(0,1);
//console.log(JSON.stringify(emp1, null , 2))

console.log("Array result from server == ", emp.length);
let emp3 = emp
  .filter((e) => e.gender === "Male")
  //.map(e => e.first_name.toUpperCase()) // it will return single field
  .map((e) => {
    e.first_name.toUpperCase();
    return e;
  })
  .sort((a, b) =>
    a.first_name > b.first_name ? 1 : a.first_name < b.first_name ? -1 : 0
  );

function compare(a, b) {
  if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
}

// // emp3.sort(function(a, b){
// //   return a.first_name > b.first_name;
// // });

// emp3.sort( compare );
console.log("Filtered Array result == ", emp3.length);
const firstEmp = emp3.shift(); // removed 1st element
console.log("Filtered Array result shift() == ", emp3.length);
//console.log(JSON.stringify(emp3, null , 2))
emp3.unshift(firstEmp); // added element on zero index
console.log("Filtered Array result unshift() == ", emp3.length);
const empFirst4 = emp.slice(0, 4); // slice first4 - original list not effected
console.log("Slice() Array result == ", empFirst4.length);
console.log("Filtered Array result after slice() == ", emp3.length);
emp3.concat(empFirst4);
//console.log(JSON.stringify(emp3, null , 2))
console.log("Concat() Array result == ", emp3.length);
emp3.splice(1, 0, "Feb");
console.log("splice() Array result == ", emp3.length);

for (const [index, element] of emp3.entries()) {
  //console.log("Entries() index : ", index, " object : ", JSON.stringify(element, null, 2))
}

const findEmpIndex = emp3.findIndex((e) => e.id === 9);
//const arrayIncludes = emp3.includes(e => e.id === 9)
//console.log(arrayIncludes)
let findEmp = {};
if (findEmpIndex !== -1) {
  findEmp = emp3.find((e) => e.id === 9);
  console.log("Array find() ==>", JSON.stringify(findEmp));
}

for (const key of emp3) {
  console.log("array keys : ", key);
}
console.log("array join : ", emp3.join("_"));
console.log("array join : ", emp3.reverse());
for (const value of emp3) {
  console.log("array values() : ", value);
}

/***  Objects  */
const empObj = emp3.shift();
console.log("Obect to manuplate : ", empObj);
const obj = Object.assign({}, empObj);
console.log("Obect assign() : ", obj);
for (const [key, value] of Object.entries(obj)) {
  console.log("Obect entries() : key", key, " value : ", value);
}
console.log("Object keys() ", Object.keys(obj));
console.log("Object values() ", Object.values(obj));
