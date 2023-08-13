const initialDeposit = 100000;
const annualInterestRate = 0.025; // อัตราดอกเบี้ยร้อยละ 2.5

let accumulatedAmount = initialDeposit; // ยอดเงินฝากสะสมเริ่มต้น

for (let year = 1; year <= 10; year++) {
  let interest = accumulatedAmount * annualInterestRate; // ดอกเบี้ยในปีนี้
  accumulatedAmount += interest; // เพิ่มดอกเบี้ยเข้ากับยอดเงินฝาก
  console.log(`ปีที่ ${year}: ยอดเงินฝากสะสม ${accumulatedAmount.toFixed(2)}`);
}
