/**
 * To generate Random colors
 * Rgb(0-255,0-255,0-255);
 */

const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
btn.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});


