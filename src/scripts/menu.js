// CONSTANTS
const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const bod = document.querySelector("body");

// EVENTLISTENER
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  bod.classList.toggle("no_scroll");
});