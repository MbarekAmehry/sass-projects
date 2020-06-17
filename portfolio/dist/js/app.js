const menuBtn = document.querySelector(".menu-btn");
const menubranding = document.querySelector(".menu-branding");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menubranding.classList.add("show");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menubranding.classList.remove("show");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
});

navLink.forEach(link => {
  link.addEventListener("click", () => {
    link.classList.remove("current");
    link.classList.add("current");
  });
});
