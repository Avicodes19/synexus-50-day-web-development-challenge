const heading = document.querySelector("#home h1");
const button = document.querySelector("#home a");
button.addEventListener("click", function () {
  heading.textContent = "Welcome to Synexus Core!";
  heading.classList.toggle("active-state");
});
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});
