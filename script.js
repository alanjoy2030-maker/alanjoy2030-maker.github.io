
// =========================================
// CHRISTMAS PORTFOLIO CONFIGURATION
// =========================================

const christmasProjects = [
  {
    title: "E-Commerce Store",
    icon: "🛍️",
    description:
      "A modern shopping experience with elegant product cards and responsive layouts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/",
    linkText: "View project ↗"
  },
  {
    title: "Creative Landing Page",
    icon: "🎨",
    description:
      "A visually engaging landing page designed to present a brand and convert visitors.",
    technologies: ["HTML", "CSS", "Responsive"],
    link: "https://github.com/",
    linkText: "View project ↗"
  },
  {
    title: "Task Manager",
    icon: "📋",
    description:
      "A simple productivity interface for organizing daily tasks and staying focused.",
    technologies: ["JavaScript", "DOM", "CSS"],
    link: "https://github.com/",
    linkText: "View project ↗"
  }
];

const christmasSkills = [
  {
    icon: "🌐",
    title: "HTML5",
    description: "Semantic structure"
  },
  {
    icon: "🎨",
    title: "CSS3",
    description: "Modern styling"
  },
  {
    icon: "⚡",
    title: "JavaScript",
    description: "Interactive experiences"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Every screen size"
  },
  {
    icon: "🔧",
    title: "Git & GitHub",
    description: "Version control"
  },
  {
    icon: "🧩",
    title: "UI/UX",
    description: "User-focused design"
  },
  {
    icon: "🚀",
    title: "Performance",
    description: "Efficient websites"
  },
  {
    icon: "♿",
    title: "Accessibility",
    description: "Inclusive experiences"
  }
];

const christmasSymbols = ["❄", "✦", "•"];
const snowflakeLimit = 28;
const snowflakeInterval = 550;

// =========================================
// GENERATE PROJECT CARDS
// =========================================

const projectGrid = document.getElementById("projectGrid");

christmasProjects.forEach((project) => {
  const projectCard = document.createElement("article");
  projectCard.className = "project-card";

  const projectArt = document.createElement("div");
  projectArt.className = "project-art";
  projectArt.setAttribute("aria-hidden", "true");
  projectArt.textContent = project.icon;

  const projectInfo = document.createElement("div");
  projectInfo.className = "project-info";

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  const projectTech = document.createElement("div");
  projectTech.className = "project-tech";

  project.technologies.forEach((technology) => {
    const techTag = document.createElement("span");
    techTag.textContent = technology;
    projectTech.appendChild(techTag);
  });

  const projectLink = document.createElement("a");
  projectLink.className = "project-link";
  projectLink.href = project.link;
  projectLink.target = "_blank";
  projectLink.rel = "noopener noreferrer";
  projectLink.textContent = project.linkText;
  projectLink.setAttribute(
    "aria-label",
    `${project.linkText}: ${project.title}`
  );

  projectInfo.append(
    projectTitle,
    projectDescription,
    projectTech,
    projectLink
  );

  projectCard.append(projectArt, projectInfo);
  projectGrid.appendChild(projectCard);
});

// =========================================
// GENERATE SKILL CARDS
// =========================================

const skillsGrid = document.getElementById("skillsGrid");

christmasSkills.forEach((skill) => {
  const skillCard = document.createElement("article");
  skillCard.className = "skill-card";

  const skillIcon = document.createElement("div");
  skillIcon.className = "skill-icon";
  skillIcon.setAttribute("aria-hidden", "true");
  skillIcon.textContent = skill.icon;

  const skillTitle = document.createElement("h3");
  skillTitle.textContent = skill.title;

  const skillDescription = document.createElement("p");
  skillDescription.textContent = skill.description;

  skillCard.append(skillIcon, skillTitle, skillDescription);
  skillsGrid.appendChild(skillCard);
});

// =========================================
// SANTA MENU: MOBILE NAVIGATION
// =========================================

const santaMenu = document.getElementById("santaMenu");
const mainNav = document.getElementById("mainNav");

santaMenu.addEventListener("click", () => {
  const menuIsOpen = mainNav.classList.toggle("open");

  santaMenu.setAttribute("aria-expanded", String(menuIsOpen));
  santaMenu.textContent = menuIsOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mainNav.classList.remove("open");
    santaMenu.setAttribute("aria-expanded", "false");
    santaMenu.textContent = "☰";
  });
});

// =========================================
// CHRISTMAS SNOWFALL
// =========================================

const snowfall = document.getElementById("snowfall");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function createSnowflake() {
  if (reducedMotion.matches) return;
  if (snowfall.childElementCount >= snowflakeLimit) return;

  const snowflake = document.createElement("span");
  snowflake.className = "snowflake";
  snowflake.textContent =
    christmasSymbols[
      Math.floor(Math.random() * christmasSymbols.length)
    ];

  const snowSize = Math.random() * 12 + 8;
  const snowDuration = Math.random() * 6 + 7;
  const snowDrift = Math.random() * 100 - 50;

  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.fontSize = `${snowSize}px`;
  snowflake.style.animationDuration = `${snowDuration}s`;
  snowflake.style.setProperty("--snow-drift", `${snowDrift}px`);

  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });

  snowfall.appendChild(snowflake);
}

if (!reducedMotion.matches) {
  for (let snowIndex = 0; snowIndex < 12; snowIndex++) {
    createSnowflake();
  }

  window.setInterval(createSnowflake, snowflakeInterval);
}

// =========================================
// FOOTER YEAR
// =========================================

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();

// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const visitorName = document
    .getElementById("visitorName")
    .value.trim();

  const visitorEmail = document
    .getElementById("visitorEmail")
    .value.trim();

  const visitorMessage = document
    .getElementById("visitorMessage")
    .value.trim();

  if (!visitorName || !visitorEmail || !visitorMessage) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  formStatus.textContent =
    "Thanks for reaching out! The form is validated, but email sending " +
    "is not connected yet. Connect an email service to receive messages.";

  // To enable actual email delivery, connect a backend or
  // email service and submit the form data to that service.
});
