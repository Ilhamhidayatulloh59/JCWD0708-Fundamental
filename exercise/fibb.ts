// 0, 1, 1, 2, 3, 5, 8 ....

let n: number = 15; // -> 610

let a: number = 0; // 3
let b: number = 1; // 610

for (let i = 1; i < n; i++) {
  let next: number = a + b; // 2
  a = b;
  b = next;
}

console.log(b);
