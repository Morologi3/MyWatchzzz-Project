const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    // Close hamburger menu
    header.classList.remove("open");
    body.classList.remove('noscroll')
    fadeElems.forEach(function(element){
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
    });
  } else {
    // Open hamburger menu
    body.classList.add('noscroll')
    header.classList.add("open");
    fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
    });
  }
});
