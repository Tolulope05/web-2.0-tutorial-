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

