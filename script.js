function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


const projectsSection = document.getElementById('projects');
const prevBtn = document.querySelector('#projects .carousel-btn.prev');
const nextBtn = document.querySelector('#projects .carousel-btn.next');
const carousel = document.getElementById('carousel');

const observerOptions = {
  root: null, 
  threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      prevBtn.classList.add('visible');
      nextBtn.classList.add('visible');
    } else {
      prevBtn.classList.remove('visible');
      nextBtn.classList.remove('visible');
    }
  });
}, observerOptions);

observer.observe(projectsSection);

const scrollAmount = 320;

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
