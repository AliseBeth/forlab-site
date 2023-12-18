const pics = document.querySelectorAll('.pictures-info li img');
const containerPics = document.querySelectorAll('.pictures-info li div');
console.log(pics.length)

setInterval(function() {
    for (i = 0; i < containerPics.length; i++){
        containerPics[i].classList.remove('colored');
    }

    let min = 0;
    let max = pics.length + 1;
    let chosenPicOne = (Math.floor(Math.random() * (max - min) + min));
    let chosenPicTwo = (Math.floor(Math.random() * (max - min) + min));
    containerPics[chosenPicOne].classList.add('colored');
    containerPics[chosenPicTwo].classList.add('colored');
}, 3000); 