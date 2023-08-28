const wrapper = document.querySelector('.signup');
const loginLinks = document.querySelectorAll('.login-link');
const signupLinks = document.querySelectorAll('.signup-link');

signupLinks.forEach(link => {
    link.onclick = function () {
        wrapper.classList.add('active');
    };
});

loginLinks.forEach(link => {
    link.onclick = function () {
        wrapper.classList.remove('active');
    };
});