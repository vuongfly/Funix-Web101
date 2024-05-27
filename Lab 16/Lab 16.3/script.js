let language = prompt('What language does the country speak?');
let population = Number(prompt('What is the population of the country?'));
let isIsland = prompt('Is the country an island?');
if (language === 'English' && population < 50000000 && isIsland === 'no') {
    console.log('You should live in this country');
}