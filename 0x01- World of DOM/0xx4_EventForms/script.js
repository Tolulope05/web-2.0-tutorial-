const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function (e) {
    e.defaultPrevented();
})