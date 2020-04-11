const loader = document.getElementById("loader");

const darkMode = JSON.parse(localStorage.getItem("darkMode"))
if (darkMode) { loader.style.backgroundColor = '#000000' } else { loader.style.backgroundColor = '#FFFFFF' }


window.onload = function () {
  setTimeout(() => {
    loader.className = "loader-hidden";
  }, 450);
  setTimeout(() => {
    loader.style.display = "none"
  }, 650);
};