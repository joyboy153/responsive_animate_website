var slides = document.querySelectorAll('.title_animation p');
var slideindex = 0;
slides[slideindex].classList.add(visible);
setInterval (function () {
    slides[slideindex].classList.remove(visible);
    slides[slideindex].classList.add(hidden);
    slideindex = (slideindex + 1) % slides.length;
    slides[slideindex].classList.remove(hidden);
    slides[slideindex].classList.add(visible);
}, 2000 );

let mobilenav =document.querySelector('.mobile-menu');
document.querySelector('.OC_btn').onclick = ()=>{
    mobilenav.classList.add('active')
}
document.querySelector('closebtn').onclick = ()=>{
    mobilenav.classList.remove('active');
};;

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 15,
    speed: 200
}); 