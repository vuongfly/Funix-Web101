const finland = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'Finnish',
    population: 6,
    neighbours: ['Sweden', 'Norway', 'Russia'],

    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function() {
        return this.neighbours.length === 0;
    },
};

console.log(finland.describe());
console.log(finland.checkIsland());