// for loop
for (let i = 10; i >= 1; i--) {
  if (i == 5 || i == 7) continue;
  console.log(`Hello World ke-${i}`);
}

// while loop
let j = 1;
while (j <= 10) {
  console.log(`Hello World ke-${j}`);
  j++;
}

// do while
let k = 1;
do {
  console.log("Hello World");
  k++;
} while (k < 0);

let sum: number = 1;

while (true) {
  console.log(sum);
  if (sum == 10) break;
  sum++;
}

/*
 *
 **
 ***
 ****
 *****
 */

// let a: number = 10;
// var b: number = 20;

// {
//   let a: number = 1;
//   var b: number = 2;
// }

// console.log(a, b)

for (let i = 1; i <= 5; i++) {
  let bintang: string = "";
  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
