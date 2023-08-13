let n = +prompt("Enter number");

let count = 0;

if (n < 0) n = -n;

let sum = 0;
while (n) {
  let remainder = n % 10;
  n = (n - remainder) / 10;
  sum += remainder;
  count++;
}
console.log(count, sum);
