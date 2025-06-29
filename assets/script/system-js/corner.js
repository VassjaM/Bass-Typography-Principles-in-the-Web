// script for first example in system.html

/* inspired by ChenXin_nth – Codepen Animation: https://codepen.io/chenxinnn/pens/ */

// watching for mouse movement
window.addEventListener('mousemove', handleMouseMove);

//selecting the spans with different classes
const spansSlow = document.querySelectorAll('.slow');
const spansFast = document.querySelectorAll('.fast');

let width = window.innerWidth;

// mouse movement handler for animation
function handleMouseMove(e) {
  let position = e.pageX / (width/2) - 1;
  let speedSlow = 100 * position;
  let speedFast = 200 * position;

  //slow class movement
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });

  //fast class movement
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
