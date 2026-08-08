const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("synexus_theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("synexus_theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("synexus_theme", "dark");
    themeToggle.textContent = "☀️";
  }
});
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const savedData = localStorage.getItem("synexus_form_draft");
if (savedData) {
  const formData = JSON.parse(savedData);
  nameInput.value = formData.name;
  emailInput.value = formData.email;
}
nameInput.addEventListener("input", saveDraft);
emailInput.addEventListener("input", saveDraft);
function saveDraft() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
  };
  const stringData = JSON.stringify(formData);
  localStorage.setItem("synexus_form_draft", stringData);
  clearTimeout(saveTimer);
  saveStatus.textContent = "✓ Draft Saved Automatically";
  saveStatus.classList.add("show");
  saveTimer = setTimeout(function () {
    saveStatus.classList.remove("show");
  }, 2000);
}
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
    localStorage.removeItem("synexus_form_draft");
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
const saveStatus = document.getElementById("save-status");

let saveTimer;
const testimonialsData = [
  {
    name: "XYZ",
    role: "Student",
    quote:
      "Synexus Core gave me the opportunity to work with talented people, build real projects, and develop skills that actually matter.",
    image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  },

  {
    name: "XYZ",
    role: "Tech Enthusiast",
    quote:
      "Being part of Synexus Core helped me turn ideas into actual projects while learning from people who were just as passionate about technology.",
    image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  },

  {
    name: "XYZ",
    role: "Advanced Programmer",
    quote:
      "The community gave us a space to experiment, collaborate, fail, learn, and build things we were genuinely proud of.",
    image: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  },
];

let currentIndex = 0;

const testimonialName = document.getElementById("testimonial-name");
const testimonialRole = document.getElementById("testimonial-role");
const testimonialQuote = document.getElementById("testimonial-quote");
const testimonialImage = document.getElementById("testimonial-image");

const nextButton = document.getElementById("next-testimonial");
const prevButton = document.getElementById("prev-testimonial");

function updateTestimonial() {
  const currentData = testimonialsData[currentIndex];

  testimonialName.textContent = currentData.name;
  testimonialRole.textContent = currentData.role;
  testimonialQuote.textContent = currentData.quote;
  testimonialImage.src = currentData.image;
  testimonialImage.alt = currentData.name;

  currentIndex++;

  if (currentIndex === testimonialsData.length) {
    currentIndex = 0;
  }
}

updateTestimonial();

let testimonialTimer = setInterval(updateTestimonial, 3000);

nextButton.addEventListener("click", function () {
  clearInterval(testimonialTimer);

  currentIndex++;

  if (currentIndex >= testimonialsData.length) {
    currentIndex = 0;
  }

  const currentData = testimonialsData[currentIndex];

  testimonialName.textContent = currentData.name;
  testimonialRole.textContent = currentData.role;
  testimonialQuote.textContent = currentData.quote;
  testimonialImage.src = currentData.image;
  testimonialImage.alt = currentData.name;

  testimonialTimer = setInterval(updateTestimonial, 3000);
});

prevButton.addEventListener("click", function () {
  clearInterval(testimonialTimer);

  currentIndex -= 2;

  if (currentIndex < 0) {
    currentIndex = testimonialsData.length - 1;
  }

  const currentData = testimonialsData[currentIndex];

  testimonialName.textContent = currentData.name;
  testimonialRole.textContent = currentData.role;
  testimonialQuote.textContent = currentData.quote;
  testimonialImage.src = currentData.image;
  testimonialImage.alt = currentData.name;

  currentIndex++;

  if (currentIndex === testimonialsData.length) {
    currentIndex = 0;
  }

  testimonialTimer = setInterval(updateTestimonial, 3000);
});
