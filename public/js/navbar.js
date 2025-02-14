function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-screen");
  mobileMenu.classList.toggle("py-2");
  mobileMenu.classList.toggle("shadow-2xl");
  mobileMenu.classList.toggle("rounded-b-lg");
}

function toggleMobileDropdown() {
  const dropdown = document.getElementById("mobile-dropdown");
  dropdown.classList.toggle("max-h-0");
  dropdown.classList.toggle("max-h-45");
  dropdown.classList.toggle("opacity-100");
}
