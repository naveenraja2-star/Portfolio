let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let navbar1=document.querySelector(".navbar-1");
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active");
            });
        }
    });
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

let toggleIcon = document.querySelector("#toggle-icon");

toggleIcon.onclick = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleIcon.classList.replace("bx-moon", "bx-sun");
        localStorage.setItem("theme", "light");
    } else {
        toggleIcon.classList.replace("bx-sun", "bx-moon");
        localStorage.setItem("theme", "dark");
    }
};

// Load saved mode
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleIcon.classList.replace("bx-moon", "bx-sun");
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content,.heading', {origin: 'top'});
ScrollReveal().reveal('.home-img,.about,services-container,.portfolio-box,.contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content', {origin: 'right'}); 

/*==================== typing animation ====================*/
const typed=new Typed('.multiple-text1',{
    strings: ['Frontend Developer','Backend Developer','Full Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

/*==================== speech synthesis ====================*/
window.onload = function() {
    const speech = new SpeechSynthesisUtterance("Hi, Welcome to My Portfolio Page");
    window.speechSynthesis.speak(speech);
};
