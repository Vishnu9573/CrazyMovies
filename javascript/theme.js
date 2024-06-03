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
  const moviePoster = document.getElementsByClassName("content");
  const navcontainerLinks = document.querySelectorAll(".nav-container-links");
  const light = document.querySelector(".light-theme");
  const dark = document.querySelector(".dark-theme");
  const footer = document.querySelector(".footer");
  const subHeader = document.querySelector(".sub-header");
  const header = document.querySelector(".header");
  const sidebarContainer = document.querySelector(".sidebar-container");

  function applyLightTheme() {
    body.classList.add("body-clr-blk");
    if (mainHeader) mainHeader.classList.add("main-header-clr-blk");
    if (search) search.classList.add("search-clr-btn");
    if (sidebarLinks) sidebarLinks.classList.add("sidebar-clr-blk");
    if (navContainer) navContainer.classList.add("nav-container-clr-blk");
    if (moviesLang) moviesLang.classList.add("movies-lang-clr-blk");
    if (footerTextColor) footerTextColor.classList.add("footer-text-clr-blk");
    if (footer) footer.classList.add("footer-background-clr-blk");
    if (subHeader) subHeader.classList.add("sub-header-clr-blk");
    if (header) header.classList.add("header-clr-blk");
    if (sidebarContainer) sidebarContainer.classList.add("sidebar-container-clr-blk");
    changeClassColorWhite();
  }

  function applyDarkTheme() {
    body.classList.remove("body-clr-blk");
    if (mainHeader) mainHeader.classList.remove("main-header-clr-blk");
    if (search) search.classList.remove("search-clr-btn");
    if (sidebarLinks) sidebarLinks.classList.remove("sidebar-clr-blk");
    if (navContainer) navContainer.classList.remove("nav-container-clr-blk");
    if (moviesLang) moviesLang.classList.remove("movies-lang-clr-blk");
    if (footerTextColor) footerTextColor.classList.remove("footer-text-clr-blk");
    if (footer) footer.classList.remove("footer-background-clr-blk");
    if (subHeader) subHeader.classList.remove("sub-header-clr-blk");
    if (header) header.classList.remove("header-clr-blk");
    if (sidebarContainer) sidebarContainer.classList.remove("sidebar-container-clr-blk");
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
