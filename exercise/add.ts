function myFunc(arr: number[], newNum: number) {
  if (arr.includes(newNum) == false) arr.push(newNum);
  return arr;
}

const arrNum: number[] = [1, 2, 3, 4];

console.log(myFunc(arrNum, 4));
console.log(myFunc(arrNum, 7));