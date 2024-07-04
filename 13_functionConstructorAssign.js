function Bank (bankName,location,ifscCode,branchcode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchcode = branchcode; 
    
}

const yesBank = new Bank ("Yes Bank", "Pimpri Chinchwad", "YESB0000648","000648" );
const sbi = new Bank ("SBI Bank ", "Ravet", "SBIN0017292","017292" );
const maharashtra = new Bank ("Maharashtra Bank", "Wakad", "MAHB0001773","001773" );
const axis = new Bank ("Axis Bank", "Mundhwa", "UTIB0005221","005221" );


Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"


console.log(`Bank Name: ${yesBank.bankName}`);
console.log(`Bank Location: ${yesBank.location}`);
console.log(`Bank IFSC Code: ${yesBank.ifscCode}`);
console.log(`Bank Branch Code : ${yesBank.branchcode}`);
// console.log(`Bank Opening Time : ${yesBank.openTime}`);

console.log(`=============================`);
console.log(`Bank Name: ${sbi.bankName}`);
console.log(`Bank Location: ${sbi.location}`);
console.log(`Bank IFSC Code: ${sbi.ifscCode}`);
console.log(`Bank Branch Code : ${sbi.branchcode}`);
// console.log(`Bank Opening Time : ${sbi.openTime}`);
console.log(`=============================`);
console.log(`Bank Name: ${maharashtra.bankName}`);
console.log(`Bank Location: ${maharashtra.location}`);
console.log(`Bank IFSC Code: ${maharashtra.ifscCode}`);
console.log(`Bank Branch Code : ${maharashtra.branchcode}`);
// console.log(`Bank Opening Time : ${maharashtra.openTime}`);
console.log(`=============================`);
console.log(`Bank Name: ${axis.bankName}`);
console.log(`Bank Location: ${axis.location}`);
console.log(`Bank IFSC Code: ${axis.ifscCode}`);
console.log(`Bank Branch Code : ${ axis.branchcode}`);
// console.log(`Bank Opening Time : ${axis.openTime}`);

console.log(`=============================`);
console.log(`SBI Bank Opening Time : ${sbi.openTime}`);
console.log(`SBI Bank Closing Time : ${sbi.closeTime}`);

console.log(`=============================`);
console.log(`Bank Name: ${axis.bankName}`);
console.log(`Axis Bank Closing Time : ${axis.closeTime}`);

console.log(`=============================`);
console.log(`Bank Name: ${yesBank.bankName}`);
console.log(`Bank Branch Code : ${yesBank.branchcode}`);
console.log(`Bank Opening Time : ${sbi.openTime}`);

