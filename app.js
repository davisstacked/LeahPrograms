// SELECTORS
const navButton = document.querySelector('.navbar-toggler');
const main = document.querySelector(".main");
const navBar = document.querySelector(".navbar");
console.log(navBar);

console.log(main.classList);

// FUNCTIONS
function grow() {
  return main.classList.toggle("main-grow");
}

function shrink() {
  return main.classList.toggle("main-shrink");
}

// EVENT LISTENERS
const handleGrow = navButton.addEventListener('click', () => {
    grow();
    shrink();
  } 
);
