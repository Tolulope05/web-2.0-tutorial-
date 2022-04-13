/**
 * ThIS
 * =====
 * - this is going to refer to whatever was clicked on
 */

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
} //Define random colors

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
} // this will refer to that something that the event was trigered on

for (let button of buttons) {
    button.addEventListener('click', colorize)
}; // This on button

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}; // This on h1

