// Your code goes here

// Define items

const header = document.querySelector("header");
const container = document.querySelector(".intro");
const sectionOne = document.querySelector("section:nth-of-type(1)");
const sectionTwo = document.querySelector("section:nth-of-type(2)");
const sectionThree = document.querySelector("section:nth-of-type(3)");
const logo = document.querySelector(".logo-heading");
const btnOne = document.querySelectorAll(".destination .btn")[0];
const btnTwo = document.querySelectorAll(".destination .btn")[1];
const btnThree = document.querySelectorAll(".destination .btn")[2];

document.querySelector("*").style.scrollBehavior = "smooth";

// Dancing logo
logo.style.transition = ".8s all ease-in-out";
logo.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "5rem";
});
logo.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "4rem";
});

document
  .querySelectorAll("nav a")[0]
  .addEventListener("click", (e) => e.preventDefault());
document
  .querySelectorAll("nav a")[1]
  .addEventListener("click", (e) => e.preventDefault());
document
  .querySelectorAll("nav a")[2]
  .addEventListener("click", (e) => e.preventDefault());
document
  .querySelectorAll("nav a")[3]
  .addEventListener("click", (e) => e.preventDefault());

// btnone
btnOne.style.transition = ".8s all ease-in-out";
btnOne.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "2rem";
  e.stopPropagation();
});
btnOne.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "1.8rem";
  e.stopPropagation();
});
btnOne.addEventListener("click", (e) => {
  e.target.style.color = "red";
  e.stopPropagation();
});
btnTwo.style.transition = ".8s all ease-in-out";
btnTwo.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "2rem";
  e.stopPropagation();
});
btnTwo.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "1.8rem";
  e.stopPropagation();
});
btnTwo.addEventListener("click", (e) => {
  e.target.style.color = "blue";
  e.stopPropagation();
});
btnThree.style.transition = ".8s all ease-in-out";
btnThree.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "2rem";
  e.stopPropagation();
});
btnThree.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "1.8rem";
  e.stopPropagation();
});
btnThree.addEventListener("click", (e) => {
  e.target.style.color = "green";
  e.stopPropagation();
});

// Fade in/out effect
container.style.height = "100vh";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexFlow = "column";
sectionOne.style.opacity = "0";
sectionOne.style.transform = "translateY(50px)";
sectionOne.style.transition = "0.8s all ease-in-out";
sectionTwo.style.opacity = "0";
sectionTwo.style.transform = "translateY(50px)";
sectionTwo.style.transition = "0.8s all ease-in-out";
sectionThree.style.opacity = "0";
sectionThree.style.transform = "translateY(50px)";
sectionThree.style.transition = "0.8s all ease-in-out";

let last_known_scroll = 0;
window.addEventListener("scroll", (e) => {
  last_known_scroll = window.scrollY;

  if (last_known_scroll > 185) {
    sectionOne.style.opacity = "100%";
    sectionOne.style.transform = "translateY(0px)";
  } else {
    sectionOne.style.opacity = "0";
    sectionOne.style.transform = "translateY(50px)";
  }
  if (last_known_scroll > 450) {
    console.log("section two show");
    sectionTwo.style.opacity = "100%";
    sectionTwo.style.transform = "translateY(0px)";
  } else {
    console.log("section two hide");
    sectionTwo.style.opacity = "0";
    sectionTwo.style.transform = "translateY(50px)";
  }
  if (last_known_scroll > 800) {
    sectionThree.style.opacity = "100%";
    sectionThree.style.transform = "translateY(0px)";
  } else {
    sectionThree.style.opacity = "0";
    sectionThree.style.transform = "translateY(50px)";
  }
});
