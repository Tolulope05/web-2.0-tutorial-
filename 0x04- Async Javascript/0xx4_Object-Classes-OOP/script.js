/**
 * PROTOTYPE
 * ==========
 * @returns String
 * return Prototype
 */

// String.prototype.yell = function () {
//     return `You passed a string ${this}`;

// };
// Array.prototype.pop = function (err) {
//     return `Sorry, I want that element, I will never pop ${err} off`
// }

/**
 * OBJECT ORIENTED CONCEPTS IN Js
*/

// 1. Factory Function
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }
// 'rgb(56, 34, 34)'
// function makeColor(r, g, b) {
//     const color = {} //Makes an object
//     color.r = r; //gives it property based on the arguments that we are provided
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this; // Destructure rgb from this i.e color object
//         return `rgb(${r}, ${g}, ${b})`
//     };
//     color.hex = function hex() {
//         const { r, g, b } = this; // Destructure rgb from this i.e color object
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); //Converts Rgb to hexacedimal values
//     } // console.log(hex(255, 255, 255))
//     return color;
// }
// const firstColor = makeColor(35, 255, 150);
// firstColor.rgb(); //'rgb(35, 255, 150)'
// firstColor.hex(); //'#23ff96'

// const black = makeColor(0, 0, 0)
// black.rgb();


// 2. Constructor Function {Better Alternative}

function Color(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

/** WILL GET BACK TO THIS LATER */
// class Color {
//     constructor(r, g, b) {
//         this.r = r
//         this.g = g
//         this.b = b
//     }
// } // new Color(45,34,34)
