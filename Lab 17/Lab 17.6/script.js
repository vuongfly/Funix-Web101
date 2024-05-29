let neighbours = ['China', 'Vietnam', 'Laos', 'Cambodia', 'Thailand', 'Malaysia', 'Indonesia', 'Philippines'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('China')] = 'Republic of China';
console.log(neighbours);