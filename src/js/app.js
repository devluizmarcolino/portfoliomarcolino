const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".fa-circle-xmark");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});