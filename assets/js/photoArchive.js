const totalPicsToDisplay = 30;
let photoArchiveDiv = document.querySelector("div.photoArchive")
let photoArchiveButton = document.querySelector("nav.photoArchiveButton")
let allTheImages = document.querySelectorAll("photoArchiveImg")
let newImageButton = document.getElementById("newPhotosButton")
let organizeButton = document.getElementById("organizeButton")
let imageBox = document.getElementById("putTheImagesInHere")
let mosBoxImg = document.querySelectorAll(".mosBoxImg")
let theHomeButton = document.querySelector("div.title")

fetch("/assets/imageNames/imgNames.json")
.then(images => {
   return images.json();
})
.then(images => imgNames = images);

let newImage = []
let imgDiv = []
let generateImages = function(){

  for (var i = 0; i < totalPicsToDisplay; i++) {

    let picNum = Math.floor(Math.random() * imgNames.name.length);
    newImage[i] = new Image()
    newImage[i].src = "/assets/img/"+imgNames.name[picNum]


    let randomWidth = Math.floor(Math.random()* (window.innerWidth * .8))
    let randomHeight = Math.floor(Math.random()* (window.innerHeight * .8)) - 88
    // console.log(randomWidth);
    // randomWidth = randomWidth + (window.innerWidth * .2)

    imgDiv[i] = document.createElement("div")
    imgDiv[i].style.position = "absolute"
    imgDiv[i].classList.add("photoArchiveImg")
    imgDiv[i].style.width = "20%"

    imgDiv[i].appendChild(newImage[i])
    imageBox.appendChild(imgDiv[i])
    imgDiv[i].style.left = randomWidth + "px"
    imgDiv[i].style.top = randomHeight + "px"
    imgDiv[i].style.cursor = "move"
    dragElement(imgDiv[i]);

  }
}

photoArchiveButton.addEventListener("click", function(){
    generateImages()
})
setTimeout(function(){

}, 500)

theHomeButton.addEventListener("click", function(){
  var images = photoArchiveDiv.getElementsByTagName('img');
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}
})

newImageButton.addEventListener("click", function(){
  var images = photoArchiveDiv.getElementsByTagName('img');
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}
generateImages()
})

organizeButton.addEventListener("click", function(){

organizeImages()


})


let organizeImages = function(){
  let allImages = document.querySelectorAll("div.photoArchiveImg")

  allImages.forEach((item, i) => {
    item.style.position = "static"
    item.style.left = ""
    item.style.top = ""

  });
  photoArchiveDiv.style.display = "flex"
  photoArchiveDiv.style.flexDirection = "column"
  photoArchiveDiv.style.overflowY = "scroll"

  imageBox.style.display = "flex"
  imageBox.style.flexDirection = "row"
  imageBox.style.flexWrap = "wrap"
  imageBox.style.justifyContent = "space-between"
  imageBox.style.alignItems = "center"

  let organizedImages = document.querySelectorAll("div.photoArchiveImg")
  organizedImages.forEach((item, i) => {
    imgDiv[i].style.marginRight = "20px"
    imgDiv[i].style.marginLeft = "20px"

  });


  imageBox.style.width = "100%"



}




function dragElement(elmnt) {
  // console.log("hello");
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    elmnt.style.zIndex = "1000"
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    console.log("hey");
  }
}

mosBoxImg.forEach((item, i) => {
  item.addEventListener("click", function(){
    generateImages()
    homePage.style.display = "none"
    zinePage.style.display = "none"
    about.style.display = "none"
    contentBox.style.display = "none"
    photoArchive.style.display = "block"
    clickedImg = document.createElement("div")
    clickedImg.style.position = "absolute"
    clickedImg.classList.add("photoArchiveImg")
    clickedImg.style.width = "20%"

    let imageInside = item.getElementsByTagName('img')
    console.log(imageInside[0]);
    let imgSrc = imageInside[0].src
    console.log(imgSrc);
    let selectedImage = new Image
    selectedImage.src = imgSrc
    clickedImg.appendChild(selectedImage)
    imageBox.insertBefore(clickedImg, imageBox.firstChild)
    clickedImg.style.left = 200 + "px"
    clickedImg.style.top = 200 + "px"
    clickedImg.style.cursor = "move"
    dragElement(clickedImg);
    organizeImages()
  })
});
