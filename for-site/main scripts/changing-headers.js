const headers = document.querySelectorAll('.welcome-changing-header');
const point = document.querySelector('.welcome-point');


//changing headers

let actual_header = 0;
setInterval(function() {
    
    if (actual_header >= headers.length) {
        actual_header = 0;
    }

    for (let b = 0; b < headers.length; b++) {
        headers[b].classList.add('hidden');
    };

    console.log('hi')
    
    headers[actual_header].classList.remove('hidden');
    actual_header = actual_header + 1;

}, 1000); 




// blinking point

let i = 1;
setInterval(function() {
    
    if (i % 2 === 0) {
        point.classList.add('hidden');
        i++
    } else {
        point.classList.remove('hidden');
        i++
    }
    if (i === 3) {
        i = 1;
    }
}, 400); 
    
