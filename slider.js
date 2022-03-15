
var slider = document.getElementById('slider');
var countSlide = 0;

function slide() {
    countSlide++;
    if (countSlide == 3) {
        countSlide = 0;
    }

    if (countSlide == 0) {
        document.slider.src = './images/slider2.jpg';
    } else if (countSlide == 1) {
        document.slider.src = './images/slider3.jpg';
    } else if (countSlide == 2) {
        document.slider.src = './images/slider1.jpg';
    }
    setTimeout("slide()", 2000);
}

window.onload = slide();


// var next = document.getElementById("next");
// var pre = document.getElementById("pre");

// next.addEventListener("click", function() {
//     if(countSlide == 2) {
//         countSlide = 0;
//         slide();
//     }else {
//         countSlide = countSlide + 1;
//         slide();
//     }
//     console.log(countSlide);
// })
// pre.addEventListener("click", function() {
//     if(countSlide == 0) {
//         countSlide = 2;
//         slide();
//     }else {
//         console.log('ok');
//         countSlide = countSlide - 1;
//         slide();
//     }
//     console.log(countSlide);
// })