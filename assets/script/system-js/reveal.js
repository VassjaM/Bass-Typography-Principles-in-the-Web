// script for second example in system.html

document.querySelectorAll('.reveal-wrapper').forEach(box => {
  box.addEventListener('click', () => {

    // if the box is active, do the hide animation
    if (box.classList.contains('active')) {

        box.classList.remove('active');
   
        box.classList.add('closing');

        setTimeout(() => {
          box.classList.remove('closing');
      }, 1800);
      
    // if the box is not active, do the show animation
    } else if (!box.classList.contains('closing')) {
      box.classList.add('active');
    }
  });
});