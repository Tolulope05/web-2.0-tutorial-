/**
 * ELEMENT
 * =======
 * Event target <- Node <- Element
 * - Element inherits properties from its parent interface, Node,
 *   and by extension that interface's parent, EventTarget.
 *  https://developer.mozilla.org/en-US/docs/Web/API/Element
 * 
 * SELECTING Methods
 * =================
 * getElementById() => get any element by its id
 * GetElementByClassName() => get any element by its class name
 * GetElementByTagName() => get any element by its tag name
 * querySelector() => can get any element by its id (#) or class (.) or tagname or attribute.
 * querySelectorAll() => same idea, but returns a collection of all matching element.
 */

// const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     console.log(img.src);
//     img.src = 'any img dir';
// }


const squareImg = document.getElementsByClassName('square');
// for (let img of squareImg) {
//     console.log(img.src)
// }

const anchorJava = document.querySelector("a[title = 'Java']") //Get element by attribute
const links = document.querySelectorAll('p a');
// for (let link of links) {
//     console.log(link.href)
// }




