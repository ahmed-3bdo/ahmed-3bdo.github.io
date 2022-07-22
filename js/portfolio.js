const navItems = document.querySelectorAll(".list__item--to-home");
// MixItUp
mixitup(".portfolio");
// Naviagation to Home Page
navItems.forEach((e) => {
  e.addEventListener("click", () => {
    location.href = "index.html";
  });
});
