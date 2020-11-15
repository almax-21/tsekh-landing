const header = document.querySelector(".header");
const navMain = header.querySelector(".main-nav");
const navToggle = header.querySelector(".toggle");

header.classList.remove("header--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("toggle--active");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navToggle.classList.remove("toggle--active");
  }
});
