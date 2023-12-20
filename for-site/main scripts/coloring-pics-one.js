const pics = document.querySelectorAll('.coloring img');
const containerPics = document.querySelectorAll('.coloring');
console.log(pics.length)

setInterval(function() {
    for (i = 0; i < containerPics.length; i++){
        containerPics[i].classList.remove('colored');
    }

    let min = 0;
    let max = pics.length;
    let chosenPicOne = (Math.floor(Math.random() * (max - min) + min));
    containerPics[chosenPicOne].classList.add('colored');
}, 3000); 