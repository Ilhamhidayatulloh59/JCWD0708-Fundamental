const arr: string[] = ["A", "B", "C", "D", "E"];
const arr2: string[] = new Array("A", "B", "C", "D", "E");
const arrNum: number[] = [10, 1, 21, 13, 8];

// console.log(arr);
// console.log(arr2);
// console.log(arrNum);

console.log(arr.toString());
console.log(arr.join(""));

arr.push("F"); // menambahkan data dari belakang
console.log(arr);

arr.pop(); // menghapus data dari belakang
console.log(arr);

arr.shift(); // menghapus data dari depan
console.log(arr);

arr.unshift("Z"); // menambahkan data dari depan
console.log(arr);

console.log(arr.length);

arr.splice(2, 0, "Y");
console.log(arr);

arrNum.sort((a, b) => b - a);
console.log(arrNum);

console.log(arr2.reverse());

console.log(arrNum.filter((value) => value % 2 == 0));

console.log(arrNum.findIndex((value) => value == 3));

console.log(arrNum.every((value) => value >= 10));

// looping array
const fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

// fruits.map((value) => {
//   console.log(value.toUpperCase());
// });

// for (let fruit of fruits) {
//   console.log(fruit);
// }

console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
