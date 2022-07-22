const html = document.querySelector("html");

// Navbar Variables
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar__list");
const navbarItems = document.querySelectorAll(".list__item");
const itemEclipse = document.querySelector(".item__eclipse--blured");
const itemUnderLine = document.querySelector(".item__underline");
const navbarMenuBtn = document.querySelector(".navbar__menu-btn");
const navbarMenuBtnLines = document.querySelector(".navbar__menu-btn span");
const activeElemnts = document.querySelectorAll(".active-element");
// Sections Variables
const about = document.querySelector("#about");
// Scroll Variables
const scrlDown = document.querySelector("#scroll-down");
// Get in Touch vars
const getInToutch = document.querySelectorAll(".get-in-touch");
// Scroll vars
const scrlToTop = document.querySelector("#scroll-to-top");
const scrlProgress = document.querySelector(".scroll__progress");
// Stars
jQuery("#stars").jstars({
  image_path: "imgs",
  style: "blue",
  frequency: 10,
});
jQuery("#po-stars").jstars({
  image_path: "imgs",
  style: "blue",
  frequency: 10,
});

// Loader Function
$(window).on("load", () => {
  $("#preloader").css({
    transform: "translateY(-100%)",
    transitionDelay: "0.6s",
  });
  $(".loader").css({
    transform: "translate(-50%,-100%)",
    transitionDelay: "0.3s",
  });

  $(".loader_text_unit").each(function () {
    let $this = $(this),
      countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 500,
        easiing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});

// Change Navbar Underline And Eclipse postion Funtion
navbarItems.forEach((e, i) => {
  e.addEventListener("click", () => {
    // Get Item Width
    let itemWidth = e.clientWidth;
    // Set Underline & Eclipse Width
    itemUnderLine.style.width = itemWidth - 64 + "px";
    itemEclipse.style.width = itemWidth - 64 + "px";
    // Check if index = 0 then reset the Underline & Eclipse position
    if (i == 0) {
      itemUnderLine.style.left = 34 + "px";
      itemEclipse.style.left = 34 + "px";
    }
    let sum = 0;
    for (let num = 0; num <= i - 1; num++) {
      // Get items Width Sum
      let itemsWidth = (sum += navbarItems[num].clientWidth);
      // Set Underline & Eclipse Position
      itemUnderLine.style.left = itemsWidth + 34 + "px";
      itemEclipse.style.left = itemsWidth + 34 + "px";
    }
    // Go To Sections
    var elemId = e.getAttribute("data-id");
    html.scrollTop = document.getElementById(elemId).offsetTop;
  });
});

// Toggle Active Elements
navbarMenuBtn.addEventListener("click", (e) => {
  for (let activated = 0; activated < activeElemnts.length; activated++) {
    activeElemnts[activated].classList.toggle("active");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    for (let activated = 0; activated < activeElemnts.length; activated++) {
      activeElemnts[activated].classList.remove("active");
    }
  }
});

// Open Mail App
getInToutch.forEach((e) => {
  e.addEventListener("click", () => {
    let email = "a.grinta@hotmail.com";
    document.location = "mailto:" + email;
  });
});

// Scroll Progress
window.addEventListener("scroll", () => {
  let scrlHeight = document.body.offsetHeight - window.innerHeight;
  let scrlTop = scrollY;
  let scrlPercent = Math.floor((scrlTop / scrlHeight) * 100);
  scrlProgress.style.width = scrlPercent + "%";

  // Show and hide scroll to top button
  scrollY > 600
    ? scrlToTop.classList.add("active")
    : scrlToTop.classList.remove("active");
});

// Scroll to Top
scrlToTop.addEventListener("click", () => {
  html.scrollTop = 0;
});

// Scroll Down Function
scrlDown.addEventListener("click", () => {
  html.scrollTop = about.offsetTop;
});
