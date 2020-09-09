const server = 'https://api.adviceslip.com/advice';

async function getAdvice() {
    fetch(server)
    .then(function(response) {
        return response.json();
    })
    .then((myJson) => {
        displayAdvice(myJson);
    })
}

const displayAdvice = (json) => {
    const advice = json.slip.advice;
    const displayEl = document.querySelector('.display-advice');
    displayEl.innerHTML = advice;
}

const makeStar = () => {
    const star = document.querySelector('.star');
    let starArr = [];

    for (let i = 0; i<30; i++) {
        starArr.push(star.cloneNode());
    }
    for (let i = 0; i<30; i++) {
        document.querySelector('.star-wrapper').append(starArr[i]);
        let size = randomSize();
        starArr[i].style.bottom = randomBottom() + '%';
        starArr[i].style.left = randomLeft() + '%';
    }
    window.setInterval(function(){
        let stars = document.querySelectorAll('.star');
        stars[randomStar()].remove();
        let newStar = stars[0].cloneNode();
        document.querySelector('.star-wrapper').append(newStar);
        newStar.style.bottom = randomBottom() + '%';
        newStar.style.left = randomLeft() + '%';
        let size = randomSize();
        newStar.style.width = size + 'px';
        newStar.style.height = size + 'px';
    }, 1300);
}

const randomBottom = () => {
    return Math.floor(Math.random() * 40);
}
const randomLeft = () => {
    return Math.floor(Math.random() * 95);
}
const randomStar = () => {
    return Math.floor(Math.random() * 30);
}
const randomSize = () => {
    return Math.random() * (30 - 15) + 15;
}

makeStar();
