/**
 * MANIPULATION
 * ============
 * Properties and Methods
 * -classList
 * -getAttribute()
 * -setAttribute()
 * -appendChild()
 * -append()
 * -prepend()
 * -removeChild()
 * -remove()
 * -createElement
 * innerText
 * textContent
 * innerHTML
 * value
 * parentElement
 * children
 * nextsibling
 * previousSibling
 * -style
 */

// Always use console.dir() to check the dom property of any element
// innerHTML retrives everything inside the text including the tag names
// console.log(document.querySelector('p').innerText)
// document.querySelector('p').innerText = 'lolololololololol' 

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

/**
 * ATTRIBUTES
 * ===========
 * All attributes can be accessed directly
 */

// document.querySelector('img').id = 'newid'; // Changes the id of the img tag
// document.querySelector('img').src = 'newsrc'; // Changes the src of the img tag

// Using Get Attribute
const firstLink = document.querySelector('a');
firstLink.href //'http://127.0.0.1:5500/wiki/List_of_chicken_breeds'
firstLink.title //'List of chicken breeds'

firstLink.getAttribute('href'); //'/wiki/List_of_chicken_breeds'
firstLink.getAttribute('title'); // 'List of chicken breeds'
firstLink.getAttribute('id'); // null

// Using Set Attribute
firstLink.setAttribute('href', 'https://www.google.com');