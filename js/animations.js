const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-in-show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-in-hidden').forEach(el => {
  observer.observe(el);
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-in-left-show');
      observer2.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-in-left-hidden').forEach(el => {
  observer2.observe(el);
});

window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".scroll-track-card");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const triggerPoint = windowHeight - 150;

    if (rect.top < triggerPoint) {
      const distance = triggerPoint - rect.top;
      const maxDistance = 300;

      let ratio = distance / maxDistance;
      ratio = Math.max(0, Math.min(1, ratio));

      card.style.opacity = ratio;
      card.style.transform = `translateY(${(1 - ratio) * 50}px)`;
    }
  });
});
