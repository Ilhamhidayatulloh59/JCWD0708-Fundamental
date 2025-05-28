let n: number = 13;
let divider: number = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) divider++;
}

console.log(divider == 2 ? "Prime number" : "Not a Prime number");
