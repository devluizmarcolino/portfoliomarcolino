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

document.addEventListener("DOMContentLoaded", function () {
  
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  const skillItems = document.querySelectorAll(".skill-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });
});