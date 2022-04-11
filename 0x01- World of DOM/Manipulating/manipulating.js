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
// console.log(document.querySelector('p').innerText)
// document.querySelector('p').innerText = 'lolololololololol' 

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}