/* // below code is for text glowing/animation
function applyGlowingEffect() {
    const text = document.querySelector('.main-header');
    const letters = text.textContent.split('');
    const colors = [
      // "#ff0000",
      "#00ff00",
      // "#0000ff",
      // "#ffff00",
      // "#00ffff",
      // "#ff00ff",
      // "#f1be32",
      // "#0feF09",
      // "#7CFC00",
      // "#00FF00",
      "#6fff0f",
    ];
    let index = 0;
    let startTime = Date.now();

    const intervalId = setInterval(() => {
          if (Date.now() - startTime >= 30000000) {
              clearInterval(intervalId);
              text.style.color = '#00ff00';
              text.style.textShadow = '0 0 10px #00ff00';
          return;
      }

      let newText = '';

      for (let i = 0; i < letters.length; i++) {
            const color = colors[(index + i) % colors.length];
            newText += `<span style="color: ${color}; text-shadow: 0 0 8px ${color};">${letters[i]}</span>`;
          }
  
        text.innerHTML = newText;
        index = (index + 1) % colors.length;
      }, 200);
  }
  
applyGlowingEffect(); */
// ! text-shadow: 0 0 10px ${color};





// below code is for select element for responsive design
function redirectToLink() {
  let select = document.getElementById("pop-up");
  let selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}






// below code is for search element

/* document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.getElementById("searchInput");
  let movies = document.querySelectorAll(".year .image");

  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.trim().toLowerCase();

    movies.forEach(function (movie) {
      let title = movie
        .querySelector(".content")
        .textContent.trim()
        .toLowerCase();
      let isVisible = title.includes(searchTerm);
      if (isVisible) {
        movie.style.display = "block";
      } else {
        // Check if each letter in the search term appears anywhere in the title
        let allLettersFound = true;
        for (let letter of searchTerm) {
          if (!title.includes(letter)) {
            allLettersFound = false;
            break;
          }
        }
        if (allLettersFound) {
          movie.style.display = "block";
        } else {
          movie.style.display = "none";
        }
      }
    });
    let anyVisible = Array.from(movies).some(function (movie) {
      return movie.style.display !== "none";
    });
    if (!anyVisible) {
      movies.forEach(function (movie) {
        movie.style.display = "block";
      });
    }
  });
}); */





document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.getElementById("searchInput");
  let movies = document.querySelectorAll(".year .image");

  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.trim().toLowerCase();

    movies.forEach(function (movie) {
      let title = movie
        .querySelector(".content")
        .textContent.trim()
        .toLowerCase();
      let isVisible = title.includes(searchTerm);
      if (isVisible) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });

    // Check if any movies are visible after filtering
    let anyVisible = Array.from(movies).some(function (movie) {
      return movie.style.display !== "none";
    });

    // If no movies are visible, show all movies
    if (!anyVisible && searchTerm !== "") {
      movies.forEach(function (movie) {
        movie.style.display = "none";
      });
    }
  });
});








const subHeader = document.querySelector(".sub-header");
function changeText() {
  subHeader.innerHTML = "Enjoy your favorite movies in all languages 🩵";
}
changeText();



// const text = document.querySelector(".main-header");
// function changeMainHeader() {
//   text.innerHTML = "Crazy Movies";
// }
// changeMainHeader();





window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);




document.addEventListener("keydown", function (event) {
  if (event.key === "F12" || event.keyCode === 123) {
    event.preventDefault();
    return false;
  }
});




document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
  }
});





function truncateText(text, maxWidth) {
  if (text.length <= maxWidth) {
    return text;
  }
  return text.substring(0, maxWidth - 3) + "...";
}






function updateTextContent() {
  const elements = document.querySelectorAll('.content');
  const maxWidth = 20;  // You can adjust this value as needed

  elements.forEach(element => {
    const originalText = element.innerText;
    const truncatedText = truncateText(originalText, maxWidth);
    element.innerText = truncatedText;
  });
}

document.addEventListener('DOMContentLoaded', updateTextContent);




// ? below code is for responsive mobile design sidebar

const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebarContainer = document.querySelector('.sidebar-container');
const closeBtn = document.querySelector('.close-btn');

function openSidebar() {
    sidebarContainer.classList.add('show-sidebar');
}

function closeSidebar() {
    sidebarContainer.classList.remove('show-sidebar');
}

sidebarBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);






// ? below code is for header scroll functioning

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-40px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});



let lastScrollBottom = 0;
const footer = document.querySelector(".footer");
const footerText = document.getElementById('footer')
window.addEventListener("scroll", function () {
    let scrollBottom = window.scrollY || document.documentElement.scrollBottom;
    if (scrollBottom > lastScrollBottom) {
      footer.style.bottom = "-30px";
      footerText.style.bottom = "-20px";
    } else {
      footer.style.bottom = "0";
      footerText.style.bottom = "6px";
    }
    lastScrollBottom = scrollBottom;
});



const lightTheme = document.querySelector(".light");
const darkTheme = document.querySelector(".dark");
const body = document.querySelector(".body");
const search = document.querySelector(".search-input");
const sidebarLinks = document.querySelector(".sidebar-links");
const navContainer = document.querySelector(".nav-container");
const moviesLang = document.querySelector(".movies-lang");
const footerTextColor = document.querySelector(".footer-text");
const moviePoster = document.getElementsByClassName("content");
const navContainerLinks = document.querySelectorAll(".nav-container-links");
const light = document.querySelector(".light-theme");
const dark = document.querySelector(".dark-theme");
const mainHeader = document.querySelector(".main-header");

function applyLightTheme() {
  body.classList.add("body-clr-blk");
  header.classList.add("header-clr-blk");
  search.classList.add("search-clr-btn");
  sidebarLinks.classList.add("sidebar-clr-blk");
  sidebarContainer.classList.add("sidebar-container-clr-blk");
  navContainer.classList.add("nav-container-clr-blk");
  moviesLang.classList.add("movies-lang-clr-blk");
  footer.classList.add("footer-background-clr-blk");
  footerTextColor.classList.add("footer-text-clr-blk");
  subHeader.classList.add("sub-header-clr-blk");
  mainHeader.classList.add("main-header-clr-blk");
  changeClassColorWhite();
}

function applyDarkTheme() {
  body.classList.remove("body-clr-blk");
  header.classList.remove("header-clr-blk");
  search.classList.remove("search-clr-btn");
  sidebarLinks.classList.remove("sidebar-clr-blk");
  sidebarContainer.classList.remove("sidebar-container-clr-blk");
  navContainer.classList.remove("nav-container-clr-blk");
  moviesLang.classList.remove("movies-lang-clr-blk");
  footer.classList.remove("footer-background-clr-blk");
  footerTextColor.classList.remove("footer-text-clr-blk");
  subHeader.classList.remove("sub-header-clr-blk");
  mainHeader.classList.remove("main-header-clr-blk");
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

 lightTheme.addEventListener("click", selectLightTheme);
 darkTheme.addEventListener("click", selectDarkTheme);

 light.addEventListener("click", selectLightTheme);
 dark.addEventListener("click", selectDarkTheme);

 // Apply the saved theme on page load
 document.addEventListener("DOMContentLoaded", () => {
   const savedTheme = localStorage.getItem("theme");
   if (savedTheme === "light") {
     applyLightTheme();
   } else if (savedTheme === "dark") {
     applyDarkTheme();
   }
 });



// const lightTheme = document.querySelector(".light");
// const darkTheme = document.querySelector(".dark");
// const body = document.querySelector(".body");
// // const clrBtn = document.querySelector('.clr-btn');
// const search = document.querySelector(".search-input");
// const sidebarLinks = document.querySelector(".sidebar-links");
// const navContainer = document.querySelector(".nav-container");
// const moviesLang = document.querySelector(".movies-lang");
// const footerTextColor = document.querySelector(".footer-text");
// const moviePoster = document.getElementsByClassName("content");
// const navContainerLinks = document.querySelectorAll(".nav-container-links");
// const light = document.querySelector(".light-theme");
// const dark = document.querySelector(".dark-theme");
// const mainHeader = document.querySelector(".main-header");

// function lightThemeColor() {
//   body.classList.add("body-clr-blk");
//   header.classList.add("header-clr-blk");
//   search.classList.add("search-clr-btn");
//   sidebarLinks.classList.add("sidebar-clr-blk");
//   sidebarContainer.classList.add("sidebar-container-clr-blk");
//   navContainer.classList.add("nav-container-clr-blk");
//   moviesLang.classList.add("movies-lang-clr-blk");
//   footer.classList.add("footer-background-clr-blk");
//   footerTextColor.classList.add("footer-text-clr-blk");
//   subHeader.classList.add("sub-header-clr-blk");
//   mainHeader.classList.add("main-header-clr-blk");
// }

// function darkThemeColor() {
//   body.classList.remove("body-clr-blk");
//   header.classList.remove("header-clr-blk");
//   search.classList.remove("search-clr-btn");
//   sidebarLinks.classList.remove("sidebar-clr-blk");
//   sidebarContainer.classList.remove("sidebar-container-clr-blk");
//   navContainer.classList.remove("nav-container-clr-blk");
//   moviesLang.classList.remove("movies-lang-clr-blk");
//   footer.classList.remove("footer-background-clr-blk");
//   footerTextColor.classList.remove("footer-text-clr-blk");
//   subHeader.classList.remove("sub-header-clr-blk");
//   mainHeader.classList.remove("main-header-clr-blk");
  
// }

// function changeClassColorWhite() {
//   let movieName = document.querySelectorAll(".content");
//   movieName.forEach(function (name) {
//     name.style.color = "black";
//   });
// }

// function changeClassColorBlack() {
//   let movieName = document.querySelectorAll(".content");
//   movieName.forEach(function (name) {
//     name.style.color = "white";
//   });
// }

// function selectAllLightTheme() {
//   lightThemeColor();
//   changeClassColorWhite();
// }

// function selectAllDarkTheme() {
//   darkThemeColor();
//   changeClassColorBlack();
// }

// lightTheme.addEventListener("click", selectAllLightTheme);
// darkTheme.addEventListener("click", selectAllDarkTheme);

// light.addEventListener("click", selectAllLightTheme);
// dark.addEventListener("click", selectAllDarkTheme);






window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});