let photoArchiveDiv = document.querySelector("div.photoArchive")
let allTheImages = document.querySelectorAll("photoArchiveImg")
fetch("assets/imageNames/imgNames.json")
.then(images => {
   return images.json();
})
.then(images => imgNames = images);

let newImage = []
let imgDiv = []
setTimeout(function(){
  for (var i = 0; i < imgNames.name.length; i++) {
    newImage[i] = new Image()
    newImage[i].src = imgNames.name[i]


    let randomWidth = Math.floor(Math.random()* (window.innerWidth * .8))
    let randomHeight = Math.floor(Math.random()* (window.innerHeight * .8)) - 88
    // console.log(randomWidth);
    // randomWidth = randomWidth + (window.innerWidth * .2)

    imgDiv[i] = document.createElement("div")
    imgDiv[i].style.position = "absolute"
    imgDiv[i].classList.add("photoArchiveImg")
    imgDiv[i].style.width = "25%"
    imgDiv[i].appendChild(newImage[i])
    photoArchiveDiv.appendChild(imgDiv[i])
    imgDiv[i].style.left = randomWidth + "px"
    imgDiv[i].style.top = randomHeight + "px"
    imgDiv[i].style.cursor = "move"
    dragElement(imgDiv[i]);

  }


}, 500)









function dragElement(elmnt) {
  console.log("hello");
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
