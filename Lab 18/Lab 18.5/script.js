const populations = [100, 200, 300, 400];

const worldPopulation = 7900;
const percent = population => (population / worldPopulation) * 100;
const percent2 = [];

populations.forEach(population => {
    percent2.push(percent(population).toFixed(2));
});

console.log(percent2);