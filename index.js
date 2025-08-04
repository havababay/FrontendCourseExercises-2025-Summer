console.log(
  "This is a simple HTML document with a table. Frontend Course Exercises - 2025 Summer Edition"
);
/*
let num = 10;
console.log("The value of num is: " + num);
let str = "Hello, World!";
console.log("The value of x is now: " + str);

console.log("result:" + Math.sqrt(str));

console.log("loose equality: " + (5 == "5"));
console.log("strict equality: " + (5 === "5"));
*/
function multiply(a, b) {
  for (let i = 0; i < 10; i++) {
    var a = i;
    var b = i + 1;
    console.log("Multiplying " + a + " and " + b + ": " + a * b);
  }
  console.log("Final values of a and b: " + a + ", " + b);
}

//multiply(5, 10);

function multiply1(a, b) {
  for (let i = 0; i < 10; i++) {
    let x = i;
    let y = i + 1;
    console.log("Multiplying " + a + " and " + b + ": " + a * b);
  }
  console.log("Final values of x and y: " + x + ", " + y);
}
const a = 5;
//multiply1(5, 10);

var globalVar = "Global var";
let globalLet = "Global let";

function myFunction() {
  var globalVar = "Function var"; // What is happening here?
  let globalLet = "Function let"; // What is happening here?

  console.log("Inside function (var):", globalVar);
  console.log("Inside function (let):", globalLet);

  if (true) {
    var globalVar = "Block var in function"; // What is happening here?
    let globalLet = "Block let in function"; // What is happening here?

    console.log("Inside block in function (var):", globalVar);
    console.log("Inside block in function (let):", globalLet);
  }

  console.log("After block in function (var):", globalVar);
  console.log("After block in function (let):", globalLet);
}

//myFunction();
//console.log("Global (var):", globalVar);
//console.log("Global (let):", globalLet);

const square = (x) => {
  return x * x;
};

const square2 = function (x) {
  return x * x;
};

function square3(x) {
  return x * x;
}
const square4 = (x) => x * x;

console.log(square(5));
console.log(square2(5));    

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

let names = ["Alice", "Bob", "Charlie"];
names.forEach((name) => {
  console.log("Hello, " + name + "!");
});
console.log("Names array:", names);

var student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
}

student.lastname = "Smith";
console.log("Student object:", student);
student.name = "Jane Doe";
student["name"] = "Jane Smith";




