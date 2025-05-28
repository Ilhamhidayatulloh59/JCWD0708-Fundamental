const n: number = 400;

const num: number = n % 365; // var pembantu -> 35

const years: number = (n - num) / 365;
const months: number = Math.floor(num / 30);
const days: number = num % 30;

console.log(`${years} years, ${months} months, ${days} days`);

const date1: Date = new Date();
const date2: Date = new Date("2025-12-31");

const diff: number = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24));
