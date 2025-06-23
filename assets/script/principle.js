// Script for animated principle text in landing page

const elements = document.querySelectorAll('.scroll-text');

window.addEventListener('scroll', () => {
    elements.forEach(scrollText => {
        const wrapper = scrollText.parentElement;
        const rect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;

    
        const middleOffset = -1.5; // offset for the start of animation -> start before it gets into view
        let progress = 1 - (rect.top + rect.height * middleOffset) / windowHeight;

        progress = Math.min(Math.max(progress, 0), 1.5); // progress range within 0 and 1.5

        let eased; //easing for smooth animation
        if (progress <= 0.5) {
            eased = Math.pow(progress * 2, 0.9); // first it is fast to middle
        } else {
            eased = 1 + Math.pow((progress - 0.5) * 2, 0.3) * 0.2; // slow after middle
        }

        const direction = scrollText.classList.contains('left') ? -1 : 1; // get direction of the text movement from class
        const translateX = direction * (400 - eased * 330); // start out of view at 400%

        scrollText.style.transform = `translateX(${translateX}%)`;
        scrollText.style.opacity = Math.min(eased, 1);
    });
});
