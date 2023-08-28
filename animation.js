document.addEventListener("DOMContentLoaded", function () {
TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.from(".btn_area", 1, {
    opacity: 0,
    y: -20,
    delay: 0.9,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    delay: 3.2,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.from(".title_inner", 1, {
    opacity: 0,
    y: 20,
    delay: 1,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.from(".description", 1, {
    opacity: 0,
    y: 20,
    delay: 1,
    ease: Expo.easeInOut
});

TweenMax.from(".box", 1, {
    opacity: 0,
    delay: 1.5,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".banner_content .cnt_info .btn_area .btn", 1, {
    opacity: 0,
    delay: 1.4,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".follow_area", 2, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 4.1);

TweenMax.from(".ecnt01", 1, {
    opacity: 0,
    delay: 0.4,
    scale: 0.1,
    ease: Bounce.easeOut
});

TweenMax.from(".ecnt02", 1, {
    opacity: 0,
    delay: 0.8,
    scale: 0.1,
    ease: Back.easeOut
});

TweenMax.from(".eimg02", 1, {
    opacity: 0,
    delay: 1,
    scale: 0.1,
    ease: Bounce.easeOut
});

TweenMax.from(".eimg01", 1, {
    opacity: 0,
    delay: 1.8,
    scale: 0.1,
    ease: Bounce.easeOut
});

});
