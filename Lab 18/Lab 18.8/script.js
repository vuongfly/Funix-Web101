const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmiCalc: function () {
        return this.mass / this.height ** 2;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    bmiCalc: function () {
        return this.mass / this.height ** 2;
    }
}

// In ra console người có BMI cao hơn cùng với tên đầy đủ và BMI tương ứng. Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmiCalc() > john.bmiCalc()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmiCalc().toFixed(1)}) is higher than ${john.fullName}'s (${john.bmiCalc().toFixed(1)})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmiCalc().toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmiCalc().toFixed(1)})!`);
}

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
const calcTip = (bill) => {
    tips = [];
    total = [];
    bill.forEach((element) => {
        let tip = element >= 50 && element <= 300 ? element * 0.15 : element * 0.2;
        tips.push(tip);
        total.push(element + tip);
    });
}

const calcAverage = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

calcTip(bill);
console.log('Bill:', bill);
console.log('Tips:', tips);
console.log('Total:', total);
console.log('Average bill:', calcAverage(bill));
console.log('Average tip:', calcAverage(tips));
console.log('Average total:', calcAverage(total));