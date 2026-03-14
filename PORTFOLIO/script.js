function toggleMenu(){

document.getElementById("navLinks").classList.toggle("show")

}
function scrollToSection(id){

document.getElementById(id).scrollIntoView(
behavior:"smooth")
}/* MOBILE MENU TOGGLE */

function toggleMenu() {
document.getElementById("navLinks").classList.toggle("show");
}


/* SMOOTH SCROLL FUNCTION */

function scrollToSection(id) {

document.getElementById(id).scrollIntoView({
behavior: "smooth"
});

}


/* CLOSE MENU AFTER CLICK (MOBILE) */

document.querySelectorAll("#navLinks a").forEach(link => {

link.addEventListener("click", () => {

document.getElementById("navLinks").classList.remove("show");

});

});


/* NAVBAR ACTIVE LINK ON SCROLL */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;

if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});


/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {

const windowHeight = window.innerHeight;

revealElements.forEach(element => {

const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
element.style.opacity = "1";
element.style.transform = "translateY(0)";
}

});

}

window.addEventListener("scroll", revealOnScroll);


/* INITIAL STATE FOR ANIMATION */

revealElements.forEach(element => {

element.style.opacity = "0";
element.style.transform = "translateY(50px)";
element.style.transition = "all 0.8s ease";

});