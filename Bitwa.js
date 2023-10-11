let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');


  if (page.classList.contains('dark-theme')) {
    themeButton.textContent = "☾";
  } else {
    themeButton.textContent = "🌣";
  }
};
