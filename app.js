// SELECTORS
const navButton = document.querySelector('.navbar');
const main = document.querySelector(".main");

console.log(main.classList);

// FUNCTIONS
function grow() {
  return main.classList.toggle("main-grow");
  console.log(main.classList.toggle("main-grow"));
}


// EVENT LISTENERS
const handleGrow = navButton.addEventListener('click', () => {
  grow();
});
