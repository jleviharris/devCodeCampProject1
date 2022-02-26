"use strict"
let listOfDestinations = ['Japan', 'Korea', 'Italy', 'California', 'Mexico', 'Alaska', 'Germany'];
let listOfRestaurants = ['Borders Cafe', 'Maharaja', 'Sakura', 'Burger King', 'Taco Bell', 'Sonic', 'Five Guys', 'Chipotle'];
let transportationList = ['car', 'plane', 'jet', 'limo', 'motorcycle', 'subway', 'bus', 'train'];
let entertainmentList = ['Movies', 'art show', 'snowboarding', 'skatepark', 'thrifting', 'concert', 'festival', 'wine and beer tasting'];

function RandomGenerator(array){
    let randomChoice = array[Math.floor(Math.random()* array.length)]
    return randomChoice;
};

//console.log(RandomGenerator(listOfDestinations));
