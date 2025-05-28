const btn = document.querySelector('.card-btn');
const text = document.querySelector('.card-text');

btn.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            text.innerHTML = data.slip.advice;
            console.log(data.slip.advice);
        });
});