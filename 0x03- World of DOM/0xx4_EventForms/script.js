/**
 * Form Event
 */
const tweetForm = document.querySelector('#tweetForm');
const textField = document.querySelector('#textField');

const addTweet = function (username, userTweet) {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username);
    newTweet.append(boldTag);
    newTweet.append(` - ${userTweet}`);
    // console.log(newTweet);
    textField.append(newTweet);
}; //Add tweet Function Skeleton

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents get request

    // const username = document.querySelectorAll('input')[0].value; 
    // const userTweet = document.querySelectorAll('input')[1].value;

    const usernameInput = tweetForm.elements.username; //Better alternative by name
    const userTweet = tweetForm.elements.tweet; //Better alternative by name
    addTweet(usernameInput.value, userTweet.value)
    usernameInput.value = ''; //reset
    userTweet.value = ''; //reset
});

/**
 * Input & Change Event
 */

const textInput = document.querySelector('#txtinpt');
const changeHeader = document.querySelector('#changeHeading')

// textInput.addEventListener('change', function (e) {
//     const textValue = textInput.value;
//     console.log(textValue);
// }) // change input only fires when you blur the input i.e leave it

textInput.addEventListener('input', function (e) {
    changeHeader.innerText = textInput.value;
}) // Changes input as you are typing

/**
 * Event bubbling
 */
const button = document.querySelector('#btn');
const container = document.querySelector('#container');

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

container.addEventListener('click', function () {
    container.classList.toggle('hide')
});

button.addEventListener('click', function (e) {
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
    //This method prevents event from reaching any objects other than the current object.
});

/**
 * Event Delegation
 * ================
 * Using form event from above
 * We want to delete a tweet too
 * Add eventlistener to even the element that will be added after the event is created
 */

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('clcik', function () {
//         li.remove();
//     }) // didnt work for the new li but worked for declared lis in the html 
// }

textField.addEventListener('click', function (e) {
    // console.log(e); //Print event object and check target and nodeName
    e.target.nodeName === 'LI' && e.target.remove();
})



