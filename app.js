// ---------------------------- SELECTORS -----------------------------

// NAVBAR - RESPONSIVE HAMBURGER MENU
const navButton = document.querySelector('.navbar-toggler');
const main = document.querySelector('.main');
const navBar = document.querySelector('.navbar');

// PROJECTS - PROJECTS HOVER
const projectImageContainer = document.querySelector('.project-image-container');
const projectImage = document.querySelector('.project-image');

// ---------------------------- FUNCTIONS ------------------------------
// RESPONSIVE NAV FUNCTIONS
function grow() {
  return main.classList.toggle('main-grow');
};

function shrink() {
  return main.classList.toggle('main-shrink');
};

// PROJECTS HOVER 
function projectHover() {
  const imageContainerHover = projectImageContainer.classList.toggle('project-image-container-hover');
  const imageHover = projectImage.classList.toggle('project-image-hover');
  return {
    imageContainerHover,
    imageHover
  }
};

// function projectImageHover() {
//   return projectImage.classList.toggle('project-image-hover')
// };

// ----------------------------- EVENT LISTENERS ---------------------------
// NAVBAR RESPONSIVE HAMBURGER
const handleGrow = navButton.addEventListener('click', () => {
  grow();
  shrink();
  } 
);

// PROJECT HOVER

const handleHover = projectImageContainer.addEventListener('mouseenter', () => {
  projectHover();
});

const handleRemoveHover = projectImageContainer.addEventListener('mouseleave', () => {
  projectHover();
})
