let res = "";
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
  console.log(sum);
} //5050

let sumOod = 0;
let sumEven = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) sumEven += i;
  else sumOod += i;
}

let sumEvenSquar = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvenSquar = sumEvenSquar += i ** 2;
  } else {
    console.log(`${i}^2`);
  }
  if (i % 3 == 0) {
    sumThirdSquar = sumThirdSquar += i ** 2;
  }else{
    console.log('sumThirdSqaur':sumThirdSquar)
}

}
