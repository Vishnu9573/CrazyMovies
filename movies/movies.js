function applyGlowingEffect() {
  const text = document.querySelector(".main-header");
  const letters = text.textContent.split("");
  const colors = [
    //   "#ff0000",
    "#00ff00",
    //   "#0000ff",
    //   "#ffff00",
    //   "#00ffff",
    //   "#ff00ff",
    //   "#f1be32",
    "#7FFF00",
    "#7CFC00",
    //   "#00FF00",
    "#6fff0f",
  ];
  let index = 0;
  let startTime = Date.now();

  const intervalId = setInterval(() => {
    if (Date.now() - startTime >= 30000000) {
      clearInterval(intervalId);
      text.style.color = "#00ff00";
      text.style.textShadow = "0 0 10px #00ff00";
      return;
    }

    let newText = "";

    for (let i = 0; i < letters.length; i++) {
      const color = colors[(index + i) % colors.length];
      newText += `<span style="color: ${color}; text-shadow: 0 0 10px ${color};">${letters[i]}</span>`;
    }

    text.innerHTML = newText;
    index = (index + 1) % colors.length;
  }, 200);
}

applyGlowingEffect();

function redirectToLink() {
  let select = document.getElementById("pop-up");
  let selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

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
  });
});