const populations = [100, 200, 300, 400];
const worldPopulation = 7900;
const percent = population => (population / worldPopulation) * 100;
const percentages3 = [];

let index = 0;
while (index < populations.length) {
    percentages3.push(percent(populations[index]).toFixed(2));
    index++;
}

console.log(percentages3);