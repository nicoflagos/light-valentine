// COUNTDOWN
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " ";
    document.getElementById("hours").innerHTML = hours + " ";
    document.getElementById("minutes").innerHTML = minutes + " ";
    document.getElementById("seconds").innerHTML = seconds + " ";

}, 1000);


// SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3000);


// TYPING EFFECT + SIGNATURE
const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const song = document.getElementById("loveSong");
const typedText = document.getElementById("typedText");
const signature = document.getElementById("signature");

const mainText = "Every second brings me closer to celebrating our first val together with you. You are my favorite moment, my calm, and my forever Light.";
const signText = "With Love, Nic ❤️";

let index = 0;
let signIndex = 0;

function typeMainText() {
    if (index < mainText.length) {
        typedText.innerHTML += mainText.charAt(index);
        index++;
        setTimeout(typeMainText, 50);
    } else {
        setTimeout(typeSignature, 800);
    }
}

function typeSignature() {
    if (signIndex < signText.length) {
        signature.innerHTML += signText.charAt(signIndex);
        signIndex++;
        setTimeout(typeSignature, 60);
    }
}

btn.addEventListener("click", () => {
    message.classList.remove("hidden");
    song.play();
    btn.style.display = "none";
    typeMainText();
});


// FEB 14 TRANSITION
const valentineScreen = document.getElementById("valentineScreen");
const today = new Date();

if (today.getMonth() === 1 && today.getDate() === 14) {
    setTimeout(() => {
        valentineScreen.classList.remove("valentine-hidden");
        valentineScreen.classList.add("valentine-show");
    }, 3000);
}
