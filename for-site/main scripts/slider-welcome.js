const welcome_btn = document.querySelectorAll('.welcome-circle');
const welcome_window = document.querySelectorAll('.welcome-slide');

for (let i = 0; i < welcome_btn.length; i++) {
    welcome_btn[i].addEventListener("click", swichWindow);


    function swichWindow(event) {
        for (let a = 0; a < welcome_btn.length; a++) {
            welcome_window[a].classList.add('hidden');
            welcome_btn[a].classList.remove('black');
        }
        
        welcome_window[i].classList.remove('hidden');
        welcome_btn[i].classList.add('black');
    
    }
}

var currentSlide = 0;
setInterval(function() {

    for (let b = 0; b < welcome_btn.length; b++) {
        welcome_window[b].classList.add('hidden');
        welcome_btn[b].classList.remove('black');
        
    };

    for (let n = 0; n < welcome_btn.length; n++) {
        welcome_btn[n].addEventListener("click", changeCurrent);
        
        function changeCurrent(event) {
            currentSlide = n;
        }
    };
    try {
        welcome_window[currentSlide].classList.remove('hidden');
        welcome_btn[currentSlide].classList.add('black');
    
        currentSlide++;

        if (currentSlide >= welcome_window.length) {
            currentSlide = 0;
        } 
    } catch(err) {}
    
}, 4000); 