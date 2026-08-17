const appRoot = document.getElementById("app-root");

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

const views = {
  "/": `
    <section id="home">
      <div class="hero-left">
        <h1>
          Think Big.<br />
          Start Small.
        </h1>

        <a href="/about" class="nav-link">
          Join Our Community
        </a>
      </div>

      <div class="hero-right">
        <p>Engineering students collaborating on a project</p>
      </div>
    </section>
  `,

  "/about": `
    <section id="about">
      <div class="container">
        <h2>About Synexus Core</h2>

        <p class="about-description">
          A student-led tech community dedicated to innovation,
          collaboration, and hands-on technical projects.
        </p>

        <div class="about-cards">
          <div class="about-card">
            <h3>Our Vision</h3>
            <p>
              Build a thriving engineering community that inspires
              innovation and prepares students for the future.
            </p>
          </div>

          <div class="about-card">
            <h3>Our Mission</h3>
            <p>
              Empower students with practical engineering skills
              through projects, mentorship, and collaborative learning.
            </p>
          </div>

          <div class="about-card">
            <h3>Our Values</h3>
            <p>
              Innovation, teamwork, curiosity, leadership, and
              continuous learning are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  "/team": `
    <section id="team">
      <div class="container">
        <h2>Meet Our Core Team</h2>

        <p class="team-description">
          The passionate individuals leading Synexus Core.
        </p>

        <div class="team-grid">
          <div class="profile-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              alt="Chief Executive Officer"
            />
            <h3>XYZ</h3>
            <p class="role">Chief Executive Officer (CEO)</p>
          </div>

          <div class="profile-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              alt="Chief Strategic Officer"
            />
            <h3>XYZ</h3>
            <p class="role">Chief Strategic Officer (CSO)</p>
          </div>

          <div class="profile-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              alt="Chief Technology Officer"
            />
            <h3>XYZ</h3>
            <p class="role">Chief Technology Officer (CTO)</p>
          </div>
        </div>
      </div>
    </section>
  `,

  "/initiatives": `
    <section id="initiatives">
      <div class="container">
        <h2>Our Initiatives</h2>

        <p class="initiatives-description">
          We organize events and programs that encourage students
          to learn, innovate, collaborate, and apply their engineering
          knowledge to real-world challenges.
        </p>

        <input
          type="text"
          id="search-projects"
          placeholder="Search initiatives..."
        />

        <div
          class="initiatives-grid"
          id="dynamic-grid"
        ></div>
      </div>
    </section>
    <section id="proposal">
  <div class="container">

    <h2>Propose an Initiative</h2>

    <form id="proposal-form">

      <label for="proposal-title">
        Initiative Title
      </label>

      <input
        type="text"
        id="proposal-title"
        placeholder="Enter initiative title"
        required
      />

      <label for="proposal-description">
        Description
      </label>

      <textarea
        id="proposal-description"
        rows="6"
        placeholder="Describe your initiative..."
        required
      ></textarea>

      <button type="submit" id="proposal-submit">
        Submit Proposal
      </button>
    </form>
    <div id="proposal-message"></div>
  </div>
</section>
  `,

  "/testimonials": `
    <section id="testimonials">
      <div class="container">
        <h2>What Our Members Say</h2>

        <div class="testimonial-wrapper">

          <button
            id="prev-testimonial"
            class="testimonial-arrow"
          >
            &#10094;
          </button>

          <div id="testimonial-container">

            <div class="testimonial-content">
              <p
                class="testimonial-quote"
                id="testimonial-quote"
              >
                Loading testimonial...
              </p>

              <div class="testimonial-author">
                <h3 id="testimonial-name">Member Name</h3>
                <p id="testimonial-role">Role</p>
              </div>
            </div>

            <div class="testimonial-image">
              <img
                id="testimonial-image"
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Community member"
              />
            </div>

          </div>

          <button
            id="next-testimonial"
            class="testimonial-arrow"
          >
            &#10095;
          </button>

        </div>
      </div>
    </section>
  `,

  "/contact": `
    <section id="contact">
      <div class="container">
        <h2>Get in Touch</h2>

        <p class="contact-description">
          Have questions, ideas, or want to collaborate with
          Synexus Core? We'd love to hear from you.
        </p>

        <form id="contact-form">

          <label for="name">Full Name</label>

          <input
            type="text"
            id="name"
            placeholder="John Doe"
          />

          <label for="email">Email Address</label>

          <input
            type="email"
            id="email"
            placeholder="john@example.com"
          />

          <label for="message">Message</label>

          <textarea
            id="message"
            rows="6"
            placeholder="Tell us how we can help..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>
    </section>
`,
  "/github": `
    <section id="github-lookup">
  <div class="container">

    <h2>Find a Developer</h2>

    <p>
      Search for a GitHub developer and view their public profile.
    </p>

    <div class="github-search">
  <input
    type="text"
    id="github-username"
    placeholder="Enter GitHub username"
  />
</div>

    <div id="dev-profile-card"></div>
    <h2>Recent Repositories</h2>
    <div id="repos-grid" class="initiatives-grid"></div>

  </div>
</section>
  `,
};

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("synexus_theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "🌙";
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
}

function initMobileMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
  });
}

function initInitiatives() {
  const dynamicGrid = document.getElementById("dynamic-grid");
  const searchInput = document.getElementById("search-projects");

  if (!dynamicGrid || !searchInput) return;

  function renderProjects(dataArray) {
    dynamicGrid.innerHTML = "";

    dataArray.forEach(function (project) {
      const borderClass =
        project.status === "Active" ? "active-project" : "completed-project";

      dynamicGrid.innerHTML += `
        <div class="initiative-card ${borderClass}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p>${project.status}</p>

          <button
            class="view-btn"
            data-title="${project.title}"
          >
            View Details
          </button>
        </div>
      `;
    });
  }

  renderProjects(projectsData);

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter(function (project) {
      return project.title.toLowerCase().includes(searchTerm);
    });

    renderProjects(filteredProjects);
  }

  searchInput.addEventListener("input", debounce(performSearch, 300));
}

function initTestimonials() {
  const name = document.getElementById("testimonial-name");
  const role = document.getElementById("testimonial-role");
  const quote = document.getElementById("testimonial-quote");
  const image = document.getElementById("testimonial-image");

  const next = document.getElementById("next-testimonial");
  const prev = document.getElementById("prev-testimonial");

  if (!name || !role || !quote || !image || !next || !prev) {
    return;
  }

  let currentIndex = 0;

  function updateTestimonial() {
    const currentData = testimonialsData[currentIndex];

    name.textContent = currentData.name;
    role.textContent = currentData.role;
    quote.textContent = currentData.quote;
    image.src = currentData.image;

    currentIndex++;

    if (currentIndex === testimonialsData.length) {
      currentIndex = 0;
    }
  }

  updateTestimonial();

  let testimonialTimer = setInterval(updateTestimonial, 3000);

  next.addEventListener("click", function () {
    clearInterval(testimonialTimer);

    updateTestimonial();

    testimonialTimer = setInterval(updateTestimonial, 3000);
  });

  prev.addEventListener("click", function () {
    clearInterval(testimonialTimer);

    currentIndex -= 2;

    if (currentIndex < 0) {
      currentIndex = testimonialsData.length - 1;
    }

    updateTestimonial();

    testimonialTimer = setInterval(updateTestimonial, 3000);
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (!email.value.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.value.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    console.log("Application Ready for Server");

    form.reset();
  });
}
function initProposalForm() {
  const form = document.getElementById("proposal-form");
  const titleInput = document.getElementById("proposal-title");
  const descriptionInput = document.getElementById("proposal-description");
  const submitButton = document.getElementById("proposal-submit");
  const message = document.getElementById("proposal-message");

  if (!form || !titleInput || !descriptionInput || !submitButton || !message) {
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const titleValue = titleInput.value.trim();
    const descriptionValue = descriptionInput.value.trim();

    const newInitiative = {
      title: titleValue,
      body: descriptionValue,
      userId: 1,
    };

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    message.textContent = "";

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },

          body: JSON.stringify(newInitiative),
        },
      );

      const data = await response.json();

      if (response.status === 201) {
        message.textContent = "✓ Initiative submitted successfully!";

        form.reset();

        console.log("Created initiative:", data);
      } else {
        throw new Error("Failed to submit initiative.");
      }
    } catch (error) {
      message.textContent = "Something went wrong. Please try again.";

      console.error(error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Proposal";
    }
  });
}
function initScrollObserver() {
  const hiddenElements = document.querySelectorAll(".hidden");

  if (hiddenElements.length === 0) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  hiddenElements.forEach(function (element) {
    observer.observe(element);
  });
}

async function router() {
  const path = window.location.pathname;

  if (views[path]) {
    appRoot.innerHTML = views[path];
  } else {
    appRoot.innerHTML = `
      <section class="not-found">
        <div class="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>

          <p>
            The page you're looking for doesn't exist.
          </p>

          <a href="/" class="nav-link">
            Back to Home
          </a>
        </div>
      </section>
    `;

    return;
  }

  // Initialize features AFTER their HTML has been injected
  if (path === "/github") {
    initGithubLookup();
  }

  if (path === "/initiatives") {
    initInitiatives();
    initProposalForm();
  }

  if (path === "/testimonials") {
    initTestimonials();
  }

  if (path === "/contact") {
    initContactForm();
  }

  initScrollObserver();
}

document.addEventListener("click", function (e) {
  const link = e.target.closest(".nav-link");

  if (!link) return;

  const href = link.getAttribute("href");

  if (!href || !href.startsWith("/")) return;

  e.preventDefault();

  window.history.pushState({}, "", href);

  router();
});

window.addEventListener("popstate", router);

function initApp() {
  initThemeToggle();
  initMobileMenu();
  router();
}

document.addEventListener("DOMContentLoaded", initApp);
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
function initGithubLookup() {
  const usernameInput = document.getElementById("github-username");
  const profileCard = document.getElementById("dev-profile-card");
  const reposGrid = document.getElementById("repos-grid");

  if (!usernameInput || !profileCard || !reposGrid) {
    return;
  }

  // -----------------------------
  // FETCH REPOSITORIES
  // -----------------------------
  async function fetchRepositories(username) {
    reposGrid.innerHTML = "";

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      );

      if (response.status === 403 || response.status === 429) {
        throw new Error("API Rate Limit exceeded. Please wait a moment.");
      }

      if (!response.ok) {
        throw new Error("Unable to fetch repositories.");
      }

      const data = await response.json();

      if (data.length === 0) {
        reposGrid.innerHTML = `
          <p>No public repositories found.</p>
        `;
        return;
      }

      data.forEach(function (repo) {
        reposGrid.innerHTML += `
          <div class="initiative-card">

            <h3>${repo.name}</h3>

            <p>
              ${repo.description || "No description provided."}
            </p>

            <a
              href="${repo.html_url}"
              target="_blank"
              rel="noopener noreferrer"
              class="github-profile-btn"
            >
              View Repository →
            </a>

          </div>
        `;
      });
    } catch (error) {
      reposGrid.innerHTML = `
        <p class="github-error">
          ${error.message}
        </p>
      `;
    }
  }

  // -----------------------------
  // FETCH DEVELOPER PROFILE
  // -----------------------------
  async function getDeveloperProfile(username) {
    // Empty input
    if (username === "") {
      profileCard.innerHTML = "";
      reposGrid.innerHTML = "";
      return;
    }

    profileCard.innerHTML = `
      <p class="github-loading">
        Fetching developer data...
      </p>
    `;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      // Rate limit
      if (response.status === 403 || response.status === 429) {
        throw new Error("API Rate Limit exceeded. Please wait a moment.");
      }

      // User doesn't exist
      if (!response.ok) {
        throw new Error("GitHub user not found.");
      }

      const data = await response.json();

      // -----------------------------
      // RENDER PROFILE
      // -----------------------------
      profileCard.innerHTML = `
        <div class="github-profile-card">

          <img
            src="${data.avatar_url}"
            alt="${data.name || data.login}"
            class="github-avatar"
          />

          <div class="github-profile-info">

            <h3>
              ${data.name || data.login}
            </h3>

            <p class="github-username">
              @${data.login}
            </p>

            <p>
              ${data.bio || "No bio available."}
            </p>

            <div class="github-stats">

              <span>
                <strong>${data.public_repos}</strong>
                <small>Repositories</small>
              </span>

              <span>
                <strong>${data.followers}</strong>
                <small>Followers</small>
              </span>

              <span>
                <strong>${data.following}</strong>
                <small>Following</small>
              </span>

            </div>

            <a
              href="${data.html_url}"
              target="_blank"
              rel="noopener noreferrer"
              class="github-profile-btn"
            >
              View Profile on GitHub →
            </a>

          </div>

        </div>
      `;
      await fetchRepositories(username);
    } catch (error) {
      profileCard.innerHTML = `
        <p class="github-error">
          ${error.message}
        </p>
      `;

      reposGrid.innerHTML = "";
    }
  }
  const debouncedSearch = debounce(getDeveloperProfile, 500);

  usernameInput.addEventListener("input", function () {
    debouncedSearch(usernameInput.value.trim());
  });
}
getDeveloperProfile(username);
