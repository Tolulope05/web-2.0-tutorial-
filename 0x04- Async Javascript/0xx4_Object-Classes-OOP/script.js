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

// Factory Function

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); //Converts Rgb to hexacedimal values
} // console.log(hex(255, 255, 255));

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

"hex(55,100,25)"
'rgb(56, 34, 34)'

function makeColor(r, g, b) {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b
    color.rgb = dunction() {
        return `rgb(${r}, ${g}, ${b})`
    }
    return color;
}

