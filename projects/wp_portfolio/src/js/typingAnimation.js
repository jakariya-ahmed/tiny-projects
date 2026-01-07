

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Web Developer",
  "Web Designer",
  "Software Engineer"
];

const typingEl = document.querySelector(".typing");
const hero = document.querySelector(".hero");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingStarted = false;

/* =============================
   TYPING EFFECT (GSAP TIMED)
============================= */
function typeEffect() {
  const word = roles[wordIndex];

  if (!isDeleting) {
    typingEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;
  } else {
    typingEl.textContent = word.slice(0, charIndex - 1);
    charIndex--;
  }

  let delay = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === word.length) {
    delay = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

/* =============================
   SCROLL TRIGGER START
============================= */
ScrollTrigger.create({
  trigger: hero,
  start: "top 70%",
  once: true,
  onEnter: () => {
    if (!typingStarted) {
      typingStarted = true;
      typeEffect();

      // Entrance animation
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }
  }
});

