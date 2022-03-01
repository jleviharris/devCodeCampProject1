"use strict"
let listOfDestinations = ['Japan', 'Korea', 'Italy', 'California', 'Mexico', 'Alaska', 'Germany'];
let listOfRestaurants = ['Borders Cafe', 'Maharaja', 'Sakura', 'Burger King', 'Taco Bell', 'Sonic', 'Five Guys', 'Chipotle'];
let transportationList = ['car', 'plane', 'jet', 'limo', 'motorcycle', 'subway', 'bus', 'train'];
let entertainmentList = ['the movies', 'to an art show', 'snowboarding', 'to the skatepark', 'thrifting', 'to a concert', 'to a festival', 'wine and beer tasting'];
let randomDest;
let randomRest;
let randomTransport;
let randomEntertainment;

function RandomGenerator(array){
    let randomChoice = array[Math.floor(Math.random()* array.length)]
    return randomChoice;
};

function DestinationsGenerator (){
    let userIsHappy = false;
    
    while (userIsHappy === false){
        randomDest = RandomGenerator(listOfDestinations)
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
        randomRest = RandomGenerator(listOfRestaurants)
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
        randomTransport = RandomGenerator(transportationList)
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
        randomEntertainment = RandomGenerator(entertainmentList)
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

function LastCheck (){
   
    let userIsHappy = false;

    while(userIsHappy === false){
        let userResponse = prompt('Enter "1" for a new Destination. Enter "2" for a new Restuarant. Enter "3" for new transportation. Enter "4" for new Entertainment. Enter "5" to complete your day trip')

        if (userResponse === "1"){
            DestinationsGenerator();
            LastCheck();
            userIsHappy = true;
        }else if (userResponse === "2"){
            RestaurantsGenerator();
            LastCheck();
            userIsHappy = true;
        }else if (userResponse === "3"){
            TransportationGenerator();
            LastCheck();
            userIsHappy = true;
        }else if (userResponse === "4"){
            EntertainmentGenerator();
            LastCheck();
            userIsHappy = true;
        }else if (userResponse === "5"){
            userIsHappy = true;
            console.log(`You will be traveling by ${randomTransport} to get to ${randomDest} where you'll go ${randomEntertainment} and eat at ${randomRest}`);
        };
    };
};
LastCheck();



