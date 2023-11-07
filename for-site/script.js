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
