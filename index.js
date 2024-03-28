
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


const cursorSmall = document.querySelector('.cursor');

const clickAnimation = (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (event.type === "mousedown") {
    cursorSmall.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0) scale(1.5)`;
  } else if (event.type === "mouseup") {
    cursorSmall.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0) scale(1)`;
  }
};

const positionElement = (event) => {
  const mouseY = event.clientY;
  const mouseX = event.clientX;

  cursorSmall.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
};

// Adding mousedown, mouseup, and mousemove event listeners to document
document.addEventListener("mousedown", clickAnimation);
document.addEventListener("mouseup", clickAnimation);
document.addEventListener("mousemove", positionElement);



window.addEventListener('mousemove', positionElement)


var i = 0;
var txt = 'A software developer fluent in Python, C#, and HTML/CSS';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', function() {
  typeWriter();
});