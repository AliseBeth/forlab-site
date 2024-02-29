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
            menu.classList.remove('header-opened');
            document.body.classList.remove('overflow');
            document.querySelector('.header-contacts').classList.remove('opened');
            document.querySelector('.head-bur').classList.remove('hidden');
            document.querySelector('.head-cross').classList.add('hidden');
            document.querySelector('.header-info').classList.add('hidden');
            document.querySelector('.header-social').classList.remove('opened');
            document.querySelector('.header-media').classList.remove('opened');
        }
    }
}
