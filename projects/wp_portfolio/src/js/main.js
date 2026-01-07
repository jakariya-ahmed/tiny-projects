// Select elements
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

mobileToggle.addEventListener('click', () => {
  // Toggle aria-expanded attribute for accessibility
  const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
  mobileToggle.setAttribute('aria-expanded', !expanded);

  // Toggle active class for hamburger animation
  mobileToggle.classList.toggle('active');

  // Toggle nav open state for mobile menu visibility
  nav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  // Add 'scrolled' class when scrollY > 10 for sticky header background change
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
