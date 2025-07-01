// script for third example in glitch.html


const startBtn = document.getElementById("startBtn");
const container = document.querySelector(".lines-container");
const lineCount = 20;

// start the function with button-click
startBtn.addEventListener("click", () => {
    // delete all lines if they exist
    document.querySelectorAll(".line").forEach(line => line.remove());

    // get the position of text elements
    const top = document.querySelector(".top");
    const middle = document.querySelector(".middle");
    const bottom = document.querySelector(".bottom");

    // remove animate class and reset styles for the text elements
    [top, middle, bottom].forEach(el => {
        el.classList.remove("animate");
        el.style.transform = "";
    });


    // reflow the animation to start it again later
    void top.offsetWidth;

  // create divs for lines with gap inbetween with animation delay for each line 
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.top = `${5 + i * 5}vh`;
        line.style.animationDelay = `${i * 0.05}s, ${2 + i * 0.05}s`;
        container.appendChild(line);
    }

    // add the animate class to the text elements after a short delay
    setTimeout(() => {
        top.classList.add("animate");
        middle.classList.add("animate");
        bottom.classList.add("animate");
    }, 50);
});
