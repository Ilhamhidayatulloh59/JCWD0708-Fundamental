function myFunc(arr: string[]) {
  const last = arr.pop();
  return arr.join(", ") + " and " + last
}

console.log(myFunc(["apple", "banana", "cherry", "date"]));
