/* console.log("start");

let i = 1; // let i =0
while (i <= 20) {
  if (i % 3 == 0) {
    console.log(i);
  } else if (i % 5 == 0) console.log(`${i}:High Five`);
  //(++i =<10)

  //i = i + 2;
}
console.log("end");
 */

console.log("start");
let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FzzBuzz");
  } else {
    console.log(i);
  }
}
console.log("end");
