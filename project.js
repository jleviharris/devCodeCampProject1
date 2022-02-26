"use strict"
let listOfDestinations = ['Japan', 'Korea', 'Italy', 'California', 'Mexico', 'Alaska', 'Germany'];
let listOfRestaurants = ['Borders Cafe', 'Maharaja', 'Sakura', 'Burger King', 'Taco Bell', 'Sonic', 'Five Guys', 'Chipotle'];
let transportationList = ['car', 'plane', 'jet', 'limo', 'motorcycle', 'subway', 'bus', 'train'];
let entertainmentList = ['the movies', 'to an art show', 'snowboarding', 'to the skatepark', 'thrifting', 'to a concert', 'to a festival', 'wine and beer tasting'];

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

function RestaurantsGenerator() {
    let userIsHappy = false;

    while (userIsHappy === false){
        let randomRest = RandomGenerator(listOfRestaurants)
        let userResponse = prompt(`Would you like to eat at ${randomRest}`)

        if (userResponse.toLowerCase()==="yes"){
            alert('Enjoy your meal!')
            userIsHappy = true
        }else if (userResponse.toLowerCase()=== 'no'){
            userIsHappy = false
        }else alert('Please choose "yes" or "no".')
    }
};
RestaurantsGenerator();

function TransportationGenerator() {
    let userIsHappy = false;

    while (userIsHappy === false){
        let randomTransport = RandomGenerator(transportationList)
        let userResponse = prompt(`Would you like to travel by ${randomTransport}`)

        if (userResponse.toLowerCase()==="yes"){
            alert('Safe Travels!')
            userIsHappy = true
        }else if (userResponse.toLowerCase()==='no'){
            userIsHappy = false
        }else alert('Please choose "yes" or "no".')
     }
};
TransportationGenerator();
    
function EntertainmentGenerator(){
    let userIsHappy = false;

    while (userIsHappy === false){
        let randomEntertainment = RandomGenerator(entertainmentList)
        let userResponse = prompt(`Would you like to go ${randomEntertainment}?`)

        if (userResponse.toLowerCase()==='yes'){
            alert('Have Fun!')
            userIsHappy = true
        }else if (userResponse.toLowerCase()==='no'){
            userIsHappy = false
        }else alert('Please choose "yes" or "no".')
    }
};
EntertainmentGenerator();



