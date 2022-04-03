// To make an empty array
let student = [];

// An array of strings
let colors = ['green', 'blue', 'red', 'yellow', 'pink'];
colors[0]; //green
colors[1]; //blue
colors[2]; //red
colors[3]; //yellow
colors[4]; //pink
colors[4][0]; //p


//An array of numbers 
let luckyNum = [15, 56, 84, 15, 9, 48, 14]

//A Mixed array
let stuffs = ['cat', 67, true, NaN, null, [5, 7, 8], ""]
stuffs[5][1] //5

/**
 * Array Method
 * Push() - To add a new element to the end of the array elements
 * Pop() - To remove last element at the end of the array elements
 * shift() - To remove element at the beginning of the array elements
 * unshift() - To add a new element to the beginning of the array elements
 */

const Tee = [5, 6, 4, 7, 4];
const vee = [45, 6, 43, 76, 43];

let TeeVee = Tee.concat(vee); // To combine 2 array
console.log(TeeVee);

let cat = ['blue', 'kitty'];
let dog = ['chiwawa', 'dobberman'];
let comboAnimal = cat.concat(dog)
console.log(comboAnimal);

cat.includes('blue'); //Returns true or false

console.log(comboAnimal.indexOf('kitty')); // Returns 3 easy way to tell if something is not present..
// It returns -1

console.log(comboAnimal.reverse()); // It is a destructive to the origin array
console.log(comboAnimal) //The value of combo Animal has been reveserved

const Animals = ['dog', 'cat', 'pig', 'bird', 'duck', 'bow'];
Animals.slice(); // (6) ['dog', 'cat', 'pig', 'bird', 'duck', 'bow']

Animals.slice(3, 5); // (2) ['bird', 'duck']

Animals.splice(1, 1); //Deletes cat

Animals.splice(1, 0, 'NewBreeds', 'American Breed'); //Once splice has a second value of 0
// It adds a value to it thats passed after the 0
