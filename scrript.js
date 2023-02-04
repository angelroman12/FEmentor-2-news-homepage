const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");
const navbar = document.querySelector(".navbar");

openMenu.addEventListener("click", function () {
  navbar.classList.add("open");
});

closeMenu.addEventListener("click", function () {
  navbar.classList.remove("open");
});
