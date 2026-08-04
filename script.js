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
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  document.getElementById("name").style.borderColor = "";
  document.getElementById("email").style.borderColor = "";
  document.getElementById("message").style.borderColor = "";

  if (nameValue === "") {
    document.getElementById("name").style.borderColor = "red";
    alert("Please enter your name.");
  } else if (!emailValue.includes("@")) {
    document.getElementById("email").style.borderColor = "red";
    alert("Please enter a valid email address.");
  } else if (messageValue === "") {
    document.getElementById("message").style.borderColor = "red";
    alert("Please enter a message.");
  } else {
    console.log("Application Ready for Server");
    form.reset();
  }
});
