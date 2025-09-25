const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove menu on link click
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Shadow header on scroll
function shadowHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('shadow-header');
  } else {
    header.classList.remove('shadow-header');
  }
}
window.addEventListener('scroll', shadowHeader);

// ScrollReveal animations
ScrollReveal().reveal('.section', {
  origin: 'bottom',
  distance: '50px',
  duration: 900,
  delay: 200,
  reset: false,
  opacity: 0,
  easing: 'ease-in-out',
  interval: 100
});

const sections = document.querySelectorAll('section[id]');
const navLinksScroll = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80; // adjust offset as needed
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinksScroll.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
});
