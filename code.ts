let word: string = "Hello World";
let count: number = 123;
let isFalse: boolean = false;
let noData: null = null;
let noAssigned: undefined;

console.log(word);
console.log(word.toUpperCase().replace("O", "A"));
console.log(word.toLowerCase());
console.log(word.replace("o", "a"));
console.log(word.slice(6, 11));
console.log(word.substring(6, 11));
console.log(word.substr(6, 5));

const name: string = "Budi";
const message: string = "Hello ".concat(name);
const message2: string = "Hello " + name;
const message3: string = `Hello ${name}`;

console.log(message);
console.log(message2);
console.log(message3);

const phone: string = "123";

const num: number = 456;
console.log(num.toString());
console.log(String(num));

const phi: number = 3.1463453532;
console.log(phi.toFixed(2));
console.log(phi.toPrecision(3));

const nilai: string = "123";
// console.log(nilai * "1")
console.log(Number(nilai));
console.log(parseInt(nilai));
console.log(+nilai);
