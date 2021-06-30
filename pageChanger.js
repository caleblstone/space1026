let buttons = document.querySelectorAll("nav")
let homeButton = document.querySelector("div.title")
let homePage = document.querySelector("div.homepage")
let zinePage = document.querySelector("div.zineMaker")
let photoArchive = document.querySelector("div.photoArchive")
let about = document.querySelector("div.about")
let pages = document.querySelectorAll("div.page")





homeButton.addEventListener("click", function(){
  homePage.style.display = "flex"

  buttons.forEach((item, i) => {
    item.classList.remove("selected")
    item.style.backgroundColor = "#D6D6D6"
    item.style.color = "#925BEC"
  });

  pages.forEach((item, i) => {
    item.style.display = "none"
  });



})

buttons.forEach((item, i) => {
  item.addEventListener("click", function(){
    buttons.forEach((item, i) => {
      item.classList.remove("selected")
      item.style.backgroundColor = "#D6D6D6"
      item.style.color = "#925BEC"
    });
    item.classList.add("selected")
    if (item.classList == "selected") {
      item.style.backgroundColor = "#925BEC"
      item.style.color = "#D6D6D6"
    }

    // homePage.style.display = "none"

    if (item.classList.contains("zineMakerButton") == true) {
      homePage.style.display = "none"
      zinePage.style.display = "flex"
    }
    if (item.classList.contains("photoArchiveButton") == true) {
      homePage.style.display = "none"
      zinePage.style.display = "none"
      about.style.display = "none"
      contentBox.style.display = "none"
      photoArchive.style.display = "block"
    }
    if (item.classList.contains("aboutButton") == true) {
      homePage.style.display = "none"
      zinePage.style.display = "none"
      photoArchive.style.display = "none"
      contentBox.style.display = "none"
      about.style.display = "flex"
    }

  })
});
