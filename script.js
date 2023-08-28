var slides = document.querySelectorAll('.title_animation p');
var slideindex = 0;
slides[slideindex].classList.add('visible');
setInterval(function () {
    slides[slideindex].classList.remove('visible');
    slides[slideindex].classList.add('hidden');
    slideindex = (slideindex + 1) % slides.length;
    slides[slideindex].classList.remove('hidden');
    slides[slideindex].classList.add('visible');
}, 2000);

document.addEventListener('DOMContentLoaded', function() {
    const mobilenav = document.querySelector('.mobile_menu');
    
    document.addEventListener('click', function(event) {
        console.log('Clicked:', event.target);
        if (event.target.matches('.OC_btn')) {
            console.log('OC_btn clicked');
            mobilenav.classList.add('active');
        } else if (event.target.matches('.closebtn')) {
            console.log('closebtn clicked');
            mobilenav.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    VanillaTilt.init(document.querySelectorAll('.box'), {
        max: 15,
        speed: 200
    });
});

