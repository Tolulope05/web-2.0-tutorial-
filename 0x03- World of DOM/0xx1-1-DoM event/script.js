const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn.onclick = function () {
    console.log('button 2 Clicked');
    console.log('Yes!!!!!!!!!!');
}
const mousEnter = () => { console.log('Ouch Thats a tip') };
const mousLeave = () => { console.log('Dont leave me!!') };

btn2.onmouseenter = mousEnter
btn2.onmouseleave = mousLeave

/**
 * ADD Event Listener
 * ==================
 * Specify the evemt type and a callback to run
 * - more control
 * - more flexibility
 * - more power.
 */
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => alert('Users clicked on Header 2'));

function twist() {
    console.log('twist');
}
function shout() {
    console.log('shout');
}

btn3.addEventListener('click', twist, { once: true })// to have as many call backs as we want
//once to true makes the event runs only once on windows load
btn3.addEventListener('click', shout)// to have as many call backs as we want
