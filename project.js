"use strict"
let listOfDestinations = ['Japan', 'Korea', 'Italy', 'California', 'Mexico', 'Alaska', 'Germany'];
let listOfRestaurants = ['Borders Cafe', 'Maharaja', 'Sakura', 'Burger King', 'Taco Bell', 'Sonic', 'Five Guys', 'Chipotle'];
let transportationList = ['car', 'plane', 'jet', 'limo', 'motorcycle', 'subway', 'bus', 'train'];
let entertainmentList = ['Movies', 'art show', 'snowboarding', 'skatepark', 'thrifting', 'concert', 'festival', 'wine and beer tasting'];

function RandomGenerator(array){
    let randomChoice = array[Math.floor(Math.random()* array.length)]
    return randomChoice;
};
//console.log check bellow
//console.log(RandomGenerator(listOfDestinations));

function DestinationsGenerator (){
    let userIsHappy = false;
    
    while (userIsHappy === false){
        let randomDest = RandomGenerator(listOfDestinations)
        let userResponse = prompt(`Do you want to go to ${randomDest}?`)

        if (userResponse.toLowerCase()==='yes'){
            alert(`Great Choice. Have fun in ${randomDest}!`)
            userIsHappy = true
        }else if (userResponse.toLowerCase()==='no'){
            userIsHappy = false
        }else alert('Please choose "yes" or "no"')
        }
    };

DestinationsGenerator();
