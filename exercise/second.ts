function myFunc(arr: number[]) {
  arr.sort((a, b) => a - b);
  if (arr.length < 2) {
    return arr[0];
  } else {
    return arr[1];
  }
}

console.log(myFunc([5, 3, 1, 7, 2, 6]));
console.log(myFunc([5]));
