for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    let result = i * j;
    if (result % 2 === 0) {
      console.log(i + " x " + j + " = " + result);
    }
  }
  console.log("");
}
