// Toggle menu
const navOpenBtn = document.querySelector(".menu-open-btn");
const navCloseBtn = document.querySelector(".menu-close-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (const iterator of navElemArr) {
  iterator.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
