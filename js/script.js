let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
navbar.classList.toggle("active");
};

var typed = new Typed(".multiple-text", {

strings:[
"Software Engineer",
"Backend Developer",
"Full Stack Developer",
"MERN Stack Developer"
],

typeSpeed:80,
backSpeed:80,
backDelay:1000,
loop:true

});

ScrollReveal({

distance:'60px',
duration:2000,
delay:200

});

ScrollReveal().reveal('.home-content',{origin:'top'});
ScrollReveal().reveal('.exp-box',{origin:'left'});
ScrollReveal().reveal('.project-card',{origin:'bottom'});
ScrollReveal().reveal('.skills-container',{origin:'right'});
ScrollReveal().reveal('.achievement-card',{origin:'bottom'});