// Footer year
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Smooth scroll from hero button to Projects section
const ctaButton = document.getElementById("cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked (on mobile)
  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
    }
  });
}

// Simple contact form validation (client-side only)
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

function showError(fieldName, message) {
  const span = document.querySelector(`.error-message[data-for="${fieldName}"]`);
  if (span) {
    span.textContent = message;
  }
}

function clearErrors() {
  const errorSpans = document.querySelectorAll(".error-message");
  errorSpans.forEach((span) => {
    span.textContent = "";
  });
}

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    feedback.textContent = "";
    feedback.style.color = "";

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;

    if (!nameInput || !emailInput || !messageInput) {
      return;
    }

    if (!nameInput.value.trim()) {
      showError("name", "Please enter your name.");
      isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      showError("email", "Please enter your e-mail.");
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        showError("email", "Please enter a valid e-mail address.");
        isValid = false;
      }
    }

    if (!messageInput.value.trim()) {
      showError("message", "Please enter a message.");
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent = "Please fix the errors above and try again.";
      feedback.style.color = "#f97373";
      return;
    }

    // Simulate a successful submit (since we don't have a backend here)
    contactForm.reset();
    feedback.textContent = "Thank you! Your message has been sent (demo).";
    feedback.style.color = "#4ade80";
  });
}


