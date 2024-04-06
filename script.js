// things we want to observe
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  { threshold: 0.95 }
); // takes call back - entries are things have changed and interesected or unintersected

cards.forEach((card) => observer.observe(card)); // observe when this changes intersections)
