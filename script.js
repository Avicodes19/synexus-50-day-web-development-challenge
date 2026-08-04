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
const projectsData = [
  {
    title: "Annual Hackathon",
    description:
      "A 24-hour coding marathon where teams build innovative solutions.",
    status: "Active",
  },
  {
    title: "Technical Competitions",
    description:
      "Coding contests, paper presentations and innovation challenges.",
    status: "Completed",
  },
  {
    title: "Guest Speaker Sessions",
    description: "Industry experts share their experiences and career advice.",
    status: "Active",
  },
  {
    title: "Open Source Projects",
    description:
      "Collaborate on GitHub projects and contribute to open source.",
    status: "Active",
  },
];
const dynamicGrid = document.getElementById("dynamic-grid");

function renderProjects(dataArray) {
  dynamicGrid.innerHTML = "";
  if (dataArray.length === 0) {
    dynamicGrid.innerHTML = `
        <p>No initiatives match your search.</p>
    `;
    return;
  }
  dataArray.forEach(function (project) {
    const borderClass =
      project.status === "Active" ? "active-project" : "completed-project";

    const card = `
            <div class="initiative-card ${borderClass}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.status}</p>
            </div>
        `;

    dynamicGrid.innerHTML += card;
  });
}
renderProjects(projectsData);
const searchInput = document.getElementById("search-projects");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProjects = projectsData.filter(function (project) {
    return project.title.toLowerCase().includes(searchTerm);
  });

  renderProjects(filteredProjects);
});
