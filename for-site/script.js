//слайдер на главной странице welcome

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
  
    welcome_window[currentSlide].classList.remove('hidden');
    welcome_btn[currentSlide].classList.add('black');
    
    currentSlide++;

    if (currentSlide >= welcome_window.length) {
        currentSlide = 0;
    }
    
}, 3000); 






//меню

const menu_btn = document.querySelector('.header-burger');
const menu = document.querySelector('.header-container');
const menu_points = document.querySelectorAll('.header-menu button');

menu_btn.addEventListener("click", openMenu);

function openMenu(event) {
    menu.classList.toggle('header-opened');
    document.body.classList.toggle('overflow');
    document.querySelector('.header-contacts').classList.toggle('opened');
    document.querySelector('.head-bur').classList.toggle('hidden');
    document.querySelector('.head-cross').classList.toggle('hidden');
    document.querySelector('.header-info').classList.toggle('hidden');
    document.querySelector('.header-social').classList.toggle('opened');
    document.querySelector('.header-media').classList.toggle('opened');

    for (let i = 0; i < menu_points.length; i++) {
        menu_points[i].addEventListener("click", closeMenu);
    
        function closeMenu(event) {
            console.log('hi');
            menu.classList.remove('header-opened');
            document.body.classList.remove('overflow');
            document.querySelector('.header-contacts').classList.remove('opened');
            document.querySelector('.head-bur').classList.add('hidden');
            document.querySelector('.head-cross').classList.remove('hidden');
            document.querySelector('.header-info').classList.add('hidden');
            document.querySelector('.header-social').classList.remove('opened');
            document.querySelector('.header-media').classList.remove('opened');
        }
    }
}
