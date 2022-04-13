/**
 * EVENTS IN DOM
 * =============
 * 
 * Console.log Events o.e evt
 */

/**
 * MouseEvents
 * ===========
 */

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
}) // It contains information about the event object: Pointer/Mouse event object

/**
 * KeyboardEvent
 * =============
 * We want to know what key was pressed
 * Those informations are in the keyboard events
 * - We can listen to what arrow keys does while playing a game
 * - keydown -keyup
 */

const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key); //Letter or character that was generated .
//     console.log(e.code); // Code that correspond to an actual location on the key.
// }) //Keyboard Event information on key and code

// input.addEventListener('keyup', function (e) {
//     console.log(e);
// }) //Keyboard Event information on key release 

/**
 * In the process of making a game
 * - you want to use keyboard to make some text
 * - use windows event listener.
 * 
 */
window.addEventListener('keydown', function (e) {
    // console.log(e.code)
    /**
     * If you want to ignore ay other letter apart from the arrow keyboard
     * - use switch statement
     */
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!')
            break;
        case 'ArrowDown':
            console.log('DOWN!')
            break;
        case 'ArrowRight':
            console.log('Right!')
            break;
        case 'ArrowLeft':
            console.log('Left!')
            break;
        default:
            console.log('Ignored Keys') //Can be left blank

    }
})




