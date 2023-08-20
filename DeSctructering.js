//  General Approach on the simple Arrays
var fruits = ["Banana", "Grapes", "Mango", "Apple"];

var banana = fruits[0];
var grapes = fruits[1];
var mango = fruits[2];
var apple = fruits[3];
console.log("General Approach on Arrays");
console.log(banana);
console.log(grapes);
console.log(mango);
console.log(apple);
console.log("----------------------------------------------------")

// Using Array Desctructering
console.log("Array Desctructering Approach on Arrays");
fruits = ["Banana", "Grapes", "Mango", "Apple"];

var [banana1, grapes1, mango1, apple1] = fruits;
console.log(banana1);
console.log(grapes1);
console.log(mango1);
console.log(apple1);

console.log("----------------------------------------------------")
console.log("General Approach on Objects");
let person = { name: "yogek", age: 23, place: "Ludhiana" }

var name1 = person.name;
var age1 = person.age;
var place1 = person.place;
console.log(name1 + " " + age1 + " " + place1);

console.log("----------------------------------------------------")
console.log("Destructering Approach on Objects");

const { name, age, place } = { name: "yogek", age: 23, place: "Ludhiana" };
// V. Imp Thing to note, the name of the variables on the lhs needs to be same as rhs in the object inside,
// or else on consolling it will give undefined, but nothing like that with array destructering
console.log(name);
console.log(age);
console.log(place);
console.log("----------------------------------------------------")
// changing variable names in object desctructering
console.log("----- changing variable names in object desctructering ------------------")
const { name:name2, age:age2, place:place2 } = { name: "yogek", age: 23, place: "Ludhiana" };
console.log(name2);
console.log(age2);
console.log(place2);
