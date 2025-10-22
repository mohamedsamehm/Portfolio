const projects = [
  {
    id: 1,
    title: "ClickRank AI",
    category: "AI Platform",
    tech: ["Laravel", "PHP", "MySQL", "TailwindCSS", "API"],
    description:
      "Advanced AI-powered SEO and content ranking platform that helps businesses optimize their online presence and track performance metrics.",
    role: "Full-stack development, API integration, UI/UX implementation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demo: "https://clickrank.ai/",
    github: "#",
  },
  {
    id: 2,
    title: "Katteb.com Pages",
    category: "Backend System",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    description:
      "Built multiple pages and features for Katteb.com including admin dashboards, AI content generation tools, and user analytics tracking systems.",
    role: "Backend development, database optimization, analytics integration",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demo: "https://katteb.com",
    github: "#",
  },
  {
    id: 3,
    title: "NoVirusThanks Landing Page",
    category: "Figma to HTML",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
    description:
      "Pixel-perfect landing page conversion from Figma design with responsive layouts, smooth animations, and optimized performance.",
    role: "Frontend development, responsive design, Figma to HTML conversion",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/novirusthanks/index.html",
    github: "https://github.com/mohamedsamehm/novirusthanks",
  },
  {
    id: 4,
    title: "Pompeo Portfolio",
    category: "Figma to HTML",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
    description:
      "Modern, elegant portfolio website with smooth scrolling, interactive elements, and creative design patterns converted from Figma design.",
    role: "Frontend development, UI/UX implementation, Figma to HTML conversion",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/Pompeo/",
    github: "https://github.com/mohamedsamehm/Pompeo",
  },
  {
    id: 5,
    title: "Placetel Platform",
    category: "Figma to HTML",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
    description:
      "Professional telecommunications platform interface with complex layouts, responsive navigation, and polished user experience from Figma design.",
    role: "Frontend development, Figma to HTML conversion, cross-browser compatibility",
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/placetel/",
    github: "https://github.com/mohamedsamehm/placetel",
  },
  {
    id: 6,
    title: "Dashboard Application",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    description:
      "Feature-rich admin dashboard with data visualization, real-time updates, and intuitive interface for managing business metrics.",
    role: "Frontend development, data visualization, UI/UX design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/Dashboard-Application/dist/",
    github: "https://github.com/mohamedsamehm/Dashboard-Application",
  },
  {
    id: 7,
    title: "Muneer Subscriber Dashboard",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "Comprehensive subscriber management dashboard with user analytics, subscription tracking, and interactive data displays.",
    role: "Frontend development, dashboard design, responsive implementation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/Muneer-html/subscriber-dashboard.html",
    github: "https://github.com/mohamedsamehm/Muneer-html",
  },
  {
    id: 8,
    title: "Woofwork Platform",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Modern service platform with clean design, smooth interactions, and mobile-optimized user experience.",
    role: "Frontend development, UI/UX implementation, responsive design",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/Woofwork",
    github: "https://github.com/mohamedsamehm/Woofwork",
  },
  {
    id: 9,
    title: "Appie Landing Page",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "Vibrant, modern app landing page with animated sections, feature showcases, and conversion-optimized design.",
    role: "Frontend development, animation implementation, responsive design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    demo: "https://mohamedsamehm.github.io/appie",
    github: "https://github.com/mohamedsamehm/appie",
  },
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map(
      (project) => `
                <div class="project-card" onclick="openModal(${project.id})">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                        <span class="project-category-badge">${
                          project.category
                        }</span>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${
                          project.description
                        }</p>
                        <div class="project-tech">
                            ${project.tech
                              .slice(0, 3)
                              .map(
                                (tech) =>
                                  `<span class="tech-tag">${tech}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalRole").textContent = project.role;

  const techHtml = project.tech
    .map((tech) => `<span class="modal-tech-tag">${tech}</span>`)
    .join("");
  document.getElementById("modalTech").innerHTML = techHtml;

  let actionsHtml = `
                <a href="${project.demo}" target="_blank" class="btn btn-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                </a>
                <a href="${project.github}" target="_blank" class="btn btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                </a>
            `;

  document.getElementById("modalActions").innerHTML = actionsHtml;
  document.getElementById("projectModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("open");
  document.body.style.overflow = "auto";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

function setActiveLink() {
  const sections = document.querySelectorAll("section");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  setActiveLink();

  const nav = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  const scrollTop = document.getElementById("scrollTop");
  if (window.scrollY > 300) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      mobileNav.classList.remove("open");
    }
  });
});

document.getElementById("scrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

renderProjects();
setActiveLink();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
