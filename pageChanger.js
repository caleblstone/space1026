let buttons = document.querySelectorAll("nav")
let homeButton = document.querySelector("div.title")
let homePage = document.querySelector("div.homepage")
let zinePage = document.querySelector("div.zineMaker")
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
    homePage.style.display = "none"

    if (item.hasChildNodes("div.navZineMaker") == true) {
      homePage.style.display = "none"
      zinePage.style.display = "flex"
    }
  })
});
