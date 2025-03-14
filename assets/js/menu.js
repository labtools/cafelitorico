document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const fullMenu = document.getElementById("full-menu");

  menuToggle.addEventListener("click", function () {
    fullMenu.style.display = "flex"; // Show menu
  });

  menuClose.addEventListener("click", function () {
    fullMenu.style.display = "none"; // Hide menu
  });

  // Close menu when clicking outside of menu content
  fullMenu.addEventListener("click", function (event) {
    if (event.target === fullMenu) {
      fullMenu.style.display = "none";
    }
  });
});