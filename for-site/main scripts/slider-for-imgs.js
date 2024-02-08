const sp_pics_left = document.querySelectorAll('.slider-btn-left');
const sp_pic_container = document.querySelectorAll('.slider-one')
const sp_pic = document.querySelectorAll('.slider-img');
const sp_pics_right = document.querySelectorAll('.slider-btn-right');


for (let i = 0; i < sp_pic_container.length; i++) {

    sp_pics_left[i].addEventListener("click", clickLeft);
    sp_pics_right[i].addEventListener("click", clickRight);
    let a = 0; 

    function clickLeft(event) {
        console.log(i + 1, "номер окна")
        sp_pic[a + (i * 3)].classList.add('hidden');

        console.log(a, "номер картинки перед иф")

        if (a <= 0) {
            a = 2;
            sp_pic[a + (i * 3)].classList.remove('hidden');
        } else {
            sp_pic[(a - 1) + (i * 3)].classList.remove('hidden');
            a--
            console.log("отработал элс")
        }

        console.log(sp_pic.length, "колво картинок")
        console.log(a, "номер картинки")
    }

    function clickRight(event) {
        console.log(i + 1, "номер окна")
        sp_pic[a + (i * 3)].classList.add('hidden');

        console.log(a, "номер картинки перед иф")
        if (a >= 2) {
            a = 0;
            sp_pic[a + (i * 3)].classList.remove('hidden');
        } else {
            sp_pic[(a + 1) + (i * 3)].classList.remove('hidden');
            a++
            console.log("отработал элс")
        }

        console.log(sp_pic.length, "колво картинок")
        console.log(a, "номер картинки")
    }                    
}