function myFunc(arr: number[]) {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return { lowest, highest, average };
}

console.log(myFunc([12, 5, 23, 18, 4, 45, 32]));
console.log(myFunc2([12, 5, 23, 18, 4, 45, 32]));

function myFunc2(arr: number[]) {
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return { lowest, highest, average };
}
