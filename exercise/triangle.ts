// 01 \n02 03 \n04 05 06\n

// console.log("01 \n02 03 \n04 05 06\n");

function triangle(h: number) {
  let num: number = 0;
  let res: string = "";

  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= i; j++) {
      num++;
      if (num < 10) {
        res += `0${num} `;
      } else {
        res += `${num} `;
      }
    }
    if (i < h) res += "\n";
  }

  return res;
}

console.log(triangle(4));
