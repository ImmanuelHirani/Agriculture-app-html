const triggerButton = document.getElementById("triggerButton");
const quickLinks = document.getElementById("quickLinks");
const container = document.getElementById("quickLinksContainer");

// Toggle menu
triggerButton.addEventListener("click", function (e) {
  e.stopPropagation();
  quickLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!container.contains(e.target)) {
    quickLinks.classList.remove("active");
  }
});

// Close menu with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    quickLinks.classList.remove("active");
  }
});

// Add staggered animation delay
document.querySelectorAll("#quickLinks .quick-link").forEach((link, index) => {
  link.style.transitionDelay = `${index * 500}ms`;
});
