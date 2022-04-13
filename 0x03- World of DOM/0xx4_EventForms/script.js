const tweetForm = document.querySelector('#tweetForm');
const textField = document.querySelector('#textField');

tweetForm.addEventListener('submit', function (e) {
    const userinput = document.querySelectorAll('input')[0].value;
    const userTweet = document.querySelectorAll('input')[1].value;
    console.log(`${userinput} \n${userTweet}`)
    e.preventDefault();
});
