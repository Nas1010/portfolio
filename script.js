function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}



// const projectsSection = document.getElementById('projects');
// const prevBtn = document.querySelector('#projects .carousel-btn.prev');
// const nextBtn = document.querySelector('#projects .carousel-btn.next');

// const observerOptions = {
//   root: null, // viewport
//   threshold: 0.1 // trigger when 10% visible
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Show buttons
//       prevBtn.style.display = 'block';
//       nextBtn.style.display = 'block';
//     } else {
//       // Hide buttons
//       prevBtn.style.display = 'none';
//       nextBtn.style.display = 'none';
//     }
//   });
// }, observerOptions);

// observer.observe(projectsSection);

// const scrollAmount = 320;

// nextBtn.addEventListener('click', () => {
//   carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// });

// prevBtn.addEventListener('click', () => {
//   carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// });

const projectsSection = document.getElementById('projects');
const prevBtn = document.querySelector('#projects .carousel-btn.prev');
const nextBtn = document.querySelector('#projects .carousel-btn.next');
const carousel = document.getElementById('carousel'); // your scroll container

const observerOptions = {
  root: null, // viewport
  threshold: 0.1 // trigger when 10% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show buttons by adding a class
      prevBtn.classList.add('visible');
      nextBtn.classList.add('visible');
    } else {
      // Hide buttons by removing the class
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
