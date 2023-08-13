let n = +prompt("Enter number");
console.log(n);

let count = 0;
while (n >= 1) {
  console.log(n);
  count++;
  n = n / 10;
}
console.log(count);
