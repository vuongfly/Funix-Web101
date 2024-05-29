const calcAverage = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

const checkWinner = (dolphins, koalas) => {
    if (dolphins > koalas) {
        console.log(`Dolphins win (${dolphins} vs. ${koalas})`);
    } else if (koalas > dolphins) {
        console.log(`Koalas win (${koalas} vs. ${dolphins})`);
    }
}

const dolphins = calcAverage([44, 23, 71]);
const koalas = calcAverage([64, 54, 49]);

// const dolphins = calcAverage([85, 54, 41]);
// const koalas = calcAverage([23, 34, 27]);

checkWinner(dolphins, koalas);

let bill = [125, 555, 44];
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

calcTip(bill);
console.log('Bill:', bill);
console.log('Tips:', tips);
console.log('Total:', total);