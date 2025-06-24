// script for first example in symbolism-js

/* inspired by Florin Pop – Codepen Animation: https://codepen.io/FlorinPop17 */

const spans = document.querySelectorAll('.interactive-word span');
const targetIndex = 5; // index of the automated animation target

// adding active class to span and removing it -> css does the animation with classes
spans.forEach((span) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
});

// observing for the targeted span to animate it automatically
const targetSpan = spans[targetIndex];
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetSpan.classList.add('active');
    } else {
      targetSpan.classList.remove('active');
    }
  });
}, {
  threshold: 0.5 // start animation at 50% visibility
});

observer.observe(targetSpan);