const heading = document.querySelector("#home h1");
const button = document.querySelector("#home a");
button.addEventListener("click", function () {
  heading.textContent = "Welcome to Synexus Core!";
  heading.classList.toggle("active-state");
});
