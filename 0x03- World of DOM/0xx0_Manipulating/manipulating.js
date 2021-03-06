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

// const firstInput = document.querySelectorAll('input')[0];
const firstInput = document.querySelector("input[type='checkbox']") //Same as first one

firstInput.setAttribute('style', 'display:block')
firstInput.setAttribute('type', 'password')


/**
 * Changing Style
 * ==============
 */

const header = document.querySelector('h1');
header.style.color = 'green';
header.style.border = '2px solid pink'

// window.getComputedStyle(firstInput).fontSize

const secondHeader = document.querySelector('h2');
// secondHeader.setAttribute('class', 'purple');
// secondHeader.setAttribute('class', 'border');
// secondHeader.setAttribute('class', 'border purple');

// ClassList - An object that can control,retrive and manipulate the classes of an element
secondHeader.classList.add('border');
secondHeader.classList.add('purple');
secondHeader.classList.remove('border');
secondHeader.classList.remove('purple');
secondHeader.classList.contains('border'); //false
secondHeader.classList.toggle('border');

/**
 * TRansversing parents-Child-siblings
 * ================================
 */

const firstBold = document.querySelector('b');
firstBold.parentElement; // <p>
firstBold.firstChild; // Silkie
firstBold.nextElementSibling // <b>Silky</b>
firstBold.parentElement.parentElement //Body
firstBold.parentElement.parentElement.children // HTMLCollection(12)

const firstChilken = document.querySelector('.square');
firstChilken.nextSibling // Gives a nodeValue with text '/n' node that is a whitespace.
firstChilken.nextElementSibling // <div class="square">
firstChilken.previousSibling //Gives a nodeValue with text '\n\n' node that is a whitespace. 
firstChilken.previousElementSibling // <p>....</p>

/**
 * CREATING NEW DOM ELEMENTS
 */

const newImg = document.createElement('img'); // <div></div>
newImg.src = 'https://picsum.photos/536/354';
document.body.appendChild(newImg); //This append this as the last child of the image
newImg.classList.add('border');

// New H3
const newH3 = document.createElement('h3');
newH3.innerText = 'I am a new H3';
document.body.appendChild(newH3);


// New B at the beginning of the parapgraph
const newB = document.createElement('b');
newB.append("ToluCoder ToluCoder ToluCoder");
const firstParagraph = document.querySelector('p');
firstParagraph.prepend(newB);

/**
 * Insert adjacent element method
 * -e.g Insert an Element between SideChickens snd the first Image.
 * 
*/
const newH2 = document.createElement('h2');
newH2.append('The chilken smells so good!!! LOL');

header.insertAdjacentElement("afterend", newH2); //Element.before() //Element.after() does same thing


/**
 * Removing element
 * ================
 * - remove && removeChild
 */
const listItems = document.querySelector('ul');
const firstLi = document.querySelector('li');
const thirdLi = document.querySelectorAll('li')[4];
// listItems.removeChild(firstLi); //1 History gone in content list
// thirdLi.parentElement.removeChild(thirdLi) // 3 In cuisine gone

/**
 * REMOVE -New method
 */
const firstImage = document.querySelector('img');
// firstImage.remove() //Removes first image.