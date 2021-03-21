// ---------------------------- SELECTORS -----------------------------

// NAVBAR - RESPONSIVE HAMBURGER MENU
const navButton = document.querySelector('.navbar-toggler');
const main = document.querySelector('.main');
const navBar = document.querySelector('.navbar');

// PROJECTS - PROJECTS HOVER
const projectsContainer = document.querySelector('.projects-container');
// const projectImageContainer = document.querySelector('.project-image-container');
// const projectImage = document.querySelector('.project-image');

// console.log(projectImage);
// console.log(projectsContainer)

// ---------------------------- FUNCTIONS ------------------------------
// RESPONSIVE NAV FUNCTIONS
function grow() {
  return main.classList.toggle('main-grow');
};

function shrink() {
  return main.classList.toggle('main-shrink');
};

// PROJECTS HOVER 
// function projectHover() {
//   const imageContainerHover = projectImageContainer.classList.toggle('project-image-container-hover');
//   const imageHover = projectImage.classList.toggle('project-image-hover');
//   return {
//     imageContainerHover,
//     imageHover
//   }
// // };

// function hoverProjectImageContainer(e) {
//   const projectImageContainer = e.target.classList.contains('project-image-container');

//   const projectImage = e.target.classList.contains('project-image');

//   const projectImageContainerHover = projectImageContainer.classlist.toggle('project-image-container-hover');
//   const projectImageHover = prjectImage.classList.toggle('project-image-hover')
//   if (projectImageContainer) {
//     return {
//       projectHover,
//       projectImageHover
//     }
//   }
// }
    
// function hoverProjectImage(e) {
//   if (e.target.classList.contains('project-image')) {
//     e.target.classList.toggle('project-image-hover')
//   }
// }

// PROJECTS SCROLL REVEAL
const scroll = ScrollReveal().reveal('.project', {
  duration: 1000,
  delay: 200,
  rotate: { x: 10, y: 0, z: 0 },
  distance: '50px',
  easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  mobile: true,
  viewFactor: 0.4
});

// ----------------------------- EVENT LISTENERS ---------------------------
// NAVBAR RESPONSIVE HAMBURGER
const handleGrow = navButton.addEventListener('click', () => {
  grow();
  shrink();
  } 
);

// PROJECT HOVER



// const handleHover = projectsContainer.addEventListener('mouseenter', (e) => {
//   hoverProjectImageContainer(e);
//   // hoverProjectImage(e);
// });

// const handleRemoveHover = projectsContainer.addEventListener('mouseleave', (e) => {
//   hoverProjectImageContainer(e);
//   // hoverProjectImage(e);
// });

projectsContainer.addEventListener('mouseover', hoverImage);
projectsContainer.addEventListener('mouseout', hoverImage);

function hoverImage(e) {

  const projectImage = e.target.classList.contains("project-image");

  if (projectImage) {
    e.target.classList.toggle('project-image-hover');
    console.log('toggle item')
  }
}

