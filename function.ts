function checkNum(num: number) {
  if (num % 2 == 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

// console.log(checkNum(11));
// console.log(checkNum(10));
// console.log(checkNum(21));
// console.log(checkNum(26));

console.log(square(21));

function square(num: number) {
  // hoisting
  return num * num;
}

console.log(square(5));

const square2 = function (num: number) {
  return num * num;
};

console.log(square2(5));

// default parameter
function multiply(x: number, y: number = 1) {
  return x * y;
}

console.log(multiply(10, 3));

// rest parameter
function sum(x: number, y: number, ...other: number[]) {
  console.log(other);
  return x + y;
}

console.log(sum(2, 3, 4, 5, 6, 7, 8));

// nested function
function getMessage(firstName: string) {
  function sayHello() {
    return `Hello ${firstName}, `;
  }

  function welcomeMessage() {
    return "Welcome To Purwadhika!";
  }

  return sayHello() + welcomeMessage();
}

console.log(getMessage("Andi"));

// closure funtion
function greeting(name: string) {
  const defaultMessage: string = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

// currying function
function multiplier(x: number) {
  return function (y: number) {
    return x * y;
  };
}

const mul5 = multiplier(5);
const mul10 = multiplier(10);

console.log(mul5(2));
console.log(mul5(4));
console.log(mul5(10));

// recursive function
function countDown(fromNumber: number) {
  console.log(fromNumber);

  const nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(3);

// arrow function
const square3 = (num: number) => num * num;
const sum2 = (x: number, y: number) => x + y;
const multiply2 = (x: number, y: number) => x * y;

console.log(sum2(10, 5));

const myFunc = (name: string) => {
  return "Hello " + name;
};

console.log(2 / 0);
console.log(isFinite(2 / 0))

const str: string = "010" // -> 0 x 2^2 + 1 x 2^1 + 0 x 2^0

console.log(parseInt(str)) // radix 10 (decimals) - 2 (biner) - 16 (heksadesimal) 0-9 A-F