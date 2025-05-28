let age: number = 16;

// if statements
if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

let grade: string = "a";

if (grade == "A") {
  console.log("Excellent Result !");
} else if (grade == "B") {
  console.log("Great Result !");
} else if (grade == "C") {
  console.log("Average Result !");
} else {
  console.log("Invalid Grade");
}

let now: Date = new Date();
let day: number = now.getDay(); // 0 - 6

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log("Sabtu");
    break;
}

// let word = false;

// if (word) {
//   console.log("Hello World");
// }

// console.log(Number("12"));

let x: number = 6;
let y: number = 0;

if (x < 10 || y > 1) {
  console.log("Hello World");
}

console.log(!(x == 6));

const gender: string = "F";

if (gender == "M") {
  console.log("Male");
} else {
  console.log("Female");
}

// ternary operator
console.log(gender == "M" ? "Male" : "Female");

// short circuiting || - &&
let value: string = "";
let name: string = value || "Budi";

console.log(name);
