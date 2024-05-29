const worldPopulation = 7900;
let chinaPopulation = 1100;
let vietnamPopulation = 97;
let englandPopulation = 56;

const percent = population => (population / worldPopulation) * 100;

let chinaPercentage = percent(chinaPopulation);
let vietnamPercentage = percent(vietnamPopulation);
let englandPercentage = percent(englandPopulation);

console.log('China:', chinaPercentage.toFixed(2));
console.log('Vietnam:', vietnamPercentage.toFixed(2));
console.log('England:', englandPercentage.toFixed(2));