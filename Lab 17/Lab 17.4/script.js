const percent = population => (population / worldPopulation) * 100;
const worldPopulation = 7900;
let chinaPopulation = 1100;
let vietnamPopulation = 97;
let englandPopulation = 56;

const describePopulation = (country, population) => {
    const percentage = percent(population);
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world population.`;
}

console.log(describePopulation('China', chinaPopulation));
console.log(describePopulation('Vietnam', vietnamPopulation));
console.log(describePopulation('England', englandPopulation));
