let sum = 0;
let count = 0;

while (true) {
  let input = prompt("กรุณาป้อนตัวเลข:"); // แสดง prompt ขอให้ผู้ใช้ป้อนตัวเลข

  if (
    input === null ||
    input === "" ||
    input.toLowerCase() === "cancel" ||
    input.toLowerCase() === "esc"
  ) {
    break; // หยุดการทำงานเมื่อผู้ใช้ป้อน cancel, esc
  }

  let number = parseFloat(input); // แปลง input เป็นตัวเลขที่มีทศนิยม

  if (!isNaN(number)) {
    sum += number;
    count++;
  } else {
    console.log("ไม่สามารถรับค่านี้ได้");
  }
}

if (count === 0) {
  console.log("ไม่มีข้อมูลให้คำนวณ");
} else {
  let average = sum / count;
  console.log("ผลรวม: " + sum);
  console.log("ค่าเฉลี่ย: " + average.toFixed(2)); // แสดงผลรวมและค่าเฉลี่ยที่มีทศนิยม 2 ตำแหน่ง
}
