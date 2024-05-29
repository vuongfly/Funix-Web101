const populations = [100, 200, 300, 400];
const worldPopulation = 7900;
console.log(populations.length === 4);

const percent = population => (population / worldPopulation) * 100;
const describePopulation = (country, population) => {
    const percentage = percent(population);
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world population.`;
}

populations.forEach((population, index) => {
    console.log(describePopulation(`Country ${index}`, population));
});