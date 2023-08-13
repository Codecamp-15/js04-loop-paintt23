// Get the secret number from user 1
let secretNumber;
do {
  secretNumber = parseInt(
    prompt("ผู้เล่นคนแรก กรุณาป้อนเลขที่อยู่ระหว่าง 1 ถึง 99:")
  );
  if (secretNumber < 1 || secretNumber > 99) {
    console.log("ระบุตัวเลขไม่ถูกต้อง กรุณาลองใหม่");
  }
} while (secretNumber < 1 || secretNumber > 99);

// Player 2 guesses the secret number
let guessCount = 0;
let guessedNumber;

while (guessedNumber !== secretNumber) {
  guessedNumber = parseInt(prompt("ผู้เล่นคนที่สอง ทายเลข:"));
  guessCount++;

  if (guessedNumber === secretNumber) {
    console.log(`ถูกต้อง! คำตอบคือ ${secretNumber}`);
    console.log(`ทายไปทั้งหมด ${guessCount} ครั้ง`);
  } else if (guessedNumber < secretNumber) {
    console.log("น้อยกว่าคำตอบ");
  } else if (guessedNumber > secretNumber) {
    console.log("มากกว่าคำตอบ");
  }
}
