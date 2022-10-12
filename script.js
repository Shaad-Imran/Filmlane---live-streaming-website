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

// sticky header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  window.scrollY >= 10
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// Go To Top
const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
