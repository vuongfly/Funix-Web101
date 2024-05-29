const worldPopulation = 7900;
let chinaPopulation = 1100;
let vietnamPopulation = 97;
let englandPopulation = 56;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

let percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

let chinaPercentage = percentageOfWorld1(chinaPopulation);
let vietnamPercentage = percentageOfWorld1(vietnamPopulation);
let englandPercentage = percentageOfWorld1(englandPopulation);

console.log('China:', chinaPercentage);
console.log('Vietnam:', vietnamPercentage);
console.log('England:', englandPercentage);

chinaPercentage = percentageOfWorld2(chinaPopulation);
vietnamPercentage = percentageOfWorld2(vietnamPopulation);
englandPercentage = percentageOfWorld2(englandPopulation);

console.log(typeof chinaPercentage)
console.log('China:', chinaPercentage);
console.log('Vietnam:', vietnamPercentage);
console.log('England:', englandPercentage);