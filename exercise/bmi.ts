function checkBMI(weight: number, height: number) {
  const num = weight / (height * height);

  if (num < 18.5) {
    return "less weight";
  } else if (num <= 24.9) {
    return "ideal";
  } else if (num <= 29.9) {
    return "overweight";
  } else if (num <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
console.log(checkBMI(70, 1.61));
