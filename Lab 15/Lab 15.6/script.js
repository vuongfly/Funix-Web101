// Lab 15.6.1
let markMass1 = 78;
let markHeight1 = 1.69;

let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Lab 15.6.1 Result:");
console.log(`Mark's BMI: ${markBMI1.toFixed(1)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(1)}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);

// Lab 15.6.2
console.log("\nLab 15.6.2 Result:");
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
}
