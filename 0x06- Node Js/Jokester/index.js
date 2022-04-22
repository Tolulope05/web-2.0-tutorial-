var giveMeAJoke = require('give-me-a-joke');

// console.dir(giveMeAJoke) // Get the default method 

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    //=> console.log(joke);
});

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke(function (joke) {
    //=> console.log(joke);
});

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke(fn, ln, function (joke) {
    //=> console.log(joke);
});

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay(category, function (joke) {
    // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
    //=> console.log(joke);
});

/**
 * INSTALLED COLORS PACKAGED
 * - PRINT OUT A JOKE IN RAINBOWS TEXT
 */

var color = require('colors');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    //=> console.log(joke.rainbow); // Outputs Joke in rainbow color
});


/**
 * LInking a Global Package 
 * ========================
 *  npm install -g cowsay
 * - This install Cowsay globally onsystem
 * 
 * npm link cowsay
 * - This link cowsay from global to this folder
 *  
 */

var cowsay = require('cowsay');

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
})); // or cowsay.think()



