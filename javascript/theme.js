document.addEventListener("DOMContentLoaded", () => {
  const lightTheme = document.querySelector(".light");
  const darkTheme = document.querySelector(".dark");
  const body = document.querySelector("body");
  const search = document.querySelector(".search-input");
  const sidebarLinks = document.querySelector(".sidebar-links");
  const navContainer = document.querySelector(".nav-container");
  const moviesLang = document.querySelector(".movies-lang");
  const footerTextColor = document.querySelector(".footer-text");
  const mainHeader = document.querySelector(".main-header");

  function applyLightTheme() {
    body.classList.add("body-clr-blk");
    if (mainHeader) mainHeader.classList.add("main-header-clr-blk");
    if (search) search.classList.add("search-clr-btn");
    if (sidebarLinks) sidebarLinks.classList.add("sidebar-clr-blk");
    if (navContainer) navContainer.classList.add("nav-container-clr-blk");
    if (moviesLang) moviesLang.classList.add("movies-lang-clr-blk");
    if (footerTextColor) footerTextColor.classList.add("footer-text-clr-blk");
    changeClassColorWhite();
  }

  function applyDarkTheme() {
    body.classList.remove("body-clr-blk");
    if (mainHeader) mainHeader.classList.remove("main-header-clr-blk");
    if (search) search.classList.remove("search-clr-btn");
    if (sidebarLinks) sidebarLinks.classList.remove("sidebar-clr-blk");
    if (navContainer) navContainer.classList.remove("nav-container-clr-blk");
    if (moviesLang) moviesLang.classList.remove("movies-lang-clr-blk");
    if (footerTextColor)
      footerTextColor.classList.remove("footer-text-clr-blk");
    changeClassColorBlack();
  }

  function changeClassColorWhite() {
    let movieName = document.querySelectorAll(".content");
    movieName.forEach(function (name) {
      name.style.color = "black";
    });
  }

  function changeClassColorBlack() {
    let movieName = document.querySelectorAll(".content");
    movieName.forEach(function (name) {
      name.style.color = "white";
    });
  }

  function selectLightTheme() {
    applyLightTheme();
    localStorage.setItem("theme", "light");
  }

  function selectDarkTheme() {
    applyDarkTheme();
    localStorage.setItem("theme", "dark");
  }

  if (lightTheme) lightTheme.addEventListener("click", selectLightTheme);
  if (darkTheme) darkTheme.addEventListener("click", selectDarkTheme);

  // Apply the saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    applyLightTheme();
  } else if (savedTheme === "dark") {
    applyDarkTheme();
  }
});
