// Script for animated title text in landing page

  function animateLine(id, delayOffset = 0) {
    const line = document.getElementById(id); //get the line element by ID
    const letters = line.textContent.split(''); //split the line text into individual letters
    line.innerHTML = letters 
      .map((letter, i) => 
        `<span style="animation-delay:${(i * 0.03 + delayOffset)}s">${letter}</span>`)
      .join('');
  }

  animateLine('line1');
  animateLine('line2', 0.6);