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


/** 2. Constructor Function {Better Alternative}
 * =============================================
 * NB: We capitalize the first letter of classes or constructor functions.
 * - CREATE A BLANK, PLAIN OBJECT
 * - PASSES THE NEWLY CREATED OBJECT FROM STEP 1 AS THIS CONTEXT
 * - PASSES THE NEWLY CREATED OBJECT AS THIS CONTEXT
 * - RETURNS THIS IF THE FUNCTION DOESNT RETURN ITS OWN FUNCTION.
 *   
 */

// function Color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b

// } // Constructor function for color

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); //Converts Rgb to hexacedimal values

// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `grba(${r},${g},${b},${a})`;

// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(55, 67, 98);
// color1.hex === color2.hex //true becuase they are pointing to the same prototype


/**
 * *******************
 * JAVASCRIPT CLASSES
 * *******************
 * - /a better alternative
 */

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    } // A construction is a function that will execute immediately whenever this new class is called

    greet() {
        return `Hello from ${this.name}!!!`
    }// To define a method, similar to prototype above

    rgb() {

        return `rgb(${this.r}, ${this.g}, ${this.b})`;
        /**OR USE */
        const { r, g, b } = this
        return `rgb(${r}, ${g}, ${b})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); //Converts Rgb to hexacedimal values
    }

    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    /**
     * How to call a method/function from another method
     */
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`

    } // Same result

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`;
    }

    calcHSL() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;

        // Make r,g,b fraction of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = ((b - r) / delta) + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360 
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // Return value of h, s and l as an array
        return [h, s, l]
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
red.greet() // 'Hello from tomato!!!'
red.hex() // '#ff4359'

white.greet() //Hello from white!!!
white.hex() //'#ffffff'

red.rgba(.5) //'rgb(255, 67, 89, 0.5)'


/**
 * **************************
 * More Practice with classes
 * **************************
 * Write a function that converts RGB Color
 * system to HSL color system
 * - hue saturation and lightness
 * - hsl(0-360,1-100%,1-100%)
 * NB: Dont bother about knowing the function.
*/
function calcHSL(r, g, b) {
    // Make r,g,b fraction of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
        // Red is max
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        // Green is max
        h = ((b - r) / delta) + 2;
    else
        // Blue is max
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360 
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    // Return value of h, s and l as an array
    return [h, s, l]
}