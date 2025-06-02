const num: number = 1000;
const numStr: string = num.toString(); // "1000"
let res: string = ""; // "123.456.789"
let count: number = 0;

for (let i = numStr.length - 1; i >= 0; i--) {
  res = numStr.charAt(i) + res;
  count++;
  if (count % 3 == 0 && count !== numStr.length) {
    res = "." + res;
  }
}

console.log(`Rp. ${res},00`);

// method
const formatted = num.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 2,
});

console.log(formatted.replace("Rp", "Rp."));
