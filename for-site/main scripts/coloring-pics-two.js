const pics = document.querySelectorAll('.coloring img');
const containerPics = document.querySelectorAll('.coloring');

setInterval(function() {
    for (i = 0; i < containerPics.length; i++){
        containerPics[i].classList.remove('colored');
    }

    let min = 0;
    let max = pics.length;
    let chosenPicOne = (Math.floor(Math.random() * (max - min) + min));
    let chosenPicTwo = (Math.floor(Math.random() * (max - min) + min));
    containerPics[chosenPicOne].classList.add('colored');
    containerPics[chosenPicTwo].classList.add('colored');
}, 3000); 