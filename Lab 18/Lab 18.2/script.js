
const myCountry = {
    country: undefined,
    capital: undefined,
    language: undefined,
    population: undefined,
    neighbours: undefined,
};

const finland = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'Finnish',
    population: 6,
    neighbours: ['Sweden', 'Norway', 'Russia'],
};

console.log(`${finland.country} has ${finland.population} million ${finland.language}-speaking people, ${finland.neighbours.length} neighbouring countries and a capital called ${finland.capital}.`);

finland.population += 2;
finland['population'] -= 2;