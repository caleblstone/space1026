
let zineButton = document.querySelector("div.navZineMaker")
let contentBox = document.getElementById("content")
let zineBox = document.querySelector("div.zineProper")
let mosBoxImg = document.querySelectorAll(".mosBoxImg")
let mosBoxTxt = document.querySelectorAll(".mosBoxTxt")
let body = document.querySelector("body")
let controls = document.querySelector("div.📖-controls")
const loadTime = 1000

let answers
fetch("/assets/questions/answers.json")
.then(answers => {
   return answers.json();

})
.then(QandA => answers = QandA);

let imgNames
fetch("/assets/imageNames/imgNames.json")
.then(images => {
   return images.json();
})
//.then(Images => imgNames = Images);
.then(Images => imgNames = Images);

setTimeout(function(){
  console.log(imgNames);
  mosBoxImg.forEach((item, i) => {
    let imageSel = Math.floor(Math.random() * imgNames.name.length)
    console.log(imageSel);
    let theImage = new Image()
    theImage.src = "/assets/img/"+imgNames.name[imageSel]
    item.appendChild(theImage)
  });
}, loadTime)




let originalQuesArray
let originalImage

zineButton.addEventListener("click", function(){
  contentBox.style.display = "flex"
  generateTitle()
  introFunc()
  questionRandomizer()
  generateQandA()
  colophon()
  runBindery()
  setTimeout(function(){
    bookSetup()
    regeneration()



  }, loadTime)
  setTimeout(function(){
    fullScreenZine()
  }, 2000)

})

mosBoxImg.forEach((item, i) => {
  item.addEventListener("click", function(){
    homePage.style.display = "none"
    zinePage.style.display = "flex"
    generateTitle()
    questionRandomizer()
    generateQandA()
    runBindery()
    setTimeout(function(){
      bookSetup()
      regeneration()
    }, loadTime)
  })
});

mosBoxTxt.forEach((item, i) => {
  item.addEventListener("click", function(){
    homePage.style.display = "none"
    zinePage.style.display = "flex"
    generateTitle()
    questionRandomizer()
    generateQandA()
    runBindery()
    setTimeout(function(){
      bookSetup()
      regeneration()
      theClass = item.textContent.replace(/\s+/g, '')
      let questionH2 = document.getElementById(theClass)
      console.log(theClass);
      console.log("HowdoyoubringinnewpeopletoSpace?");
      questionH2.scrollIntoView()

    }, loadTime)

    setTimeout(function(){

    }, loadTime + 1000)
  })

});


let runBindery = function(){
  Bindery.makeBook({
    content: '#content',
    pageSetup: {
    size: { width: '5in', height: '8in' },
    margin: { top: '48pt', inner: '24pt', outer: '36pt', bottom: '40pt' },
    },
    rules:[
      titleBreak, textSplit, runningHeader, pageColorRule, qFinishedBreak, imageBleed
    ]
  });
}






let bookSetup = function(){
  let zinePreview = document.querySelector("div.📖-root")
  let binderyControls = document.querySelector("div.📖-controls")
  // let binderyControlsChild = document.querySelector("div.📖-print-options")
  let binderyZoomContent = document.querySelector("div.📖-zoom-content")
  let binderyPrintButton = document.querySelector("button.📖-btn-print")

  zineBox.appendChild(zinePreview)
  zinePreview.style.backgroundColor = "#D6D6D6"
  binderyControls.style.backgroundColor = "#D6D6D6"
  binderyZoomContent.style.backgroundColor = "#D6D6D6"
  binderyControls.style.fontFamily = "Space Grotesk"


  homeButton.addEventListener("click", function(){
    zinePreview.remove()
    contentBox.innerHTML = ""
    // let binderyBox = document.querySelector("div.📖-measure-area")
    let binderyBox = document.querySelector("div.zineProper")
    // binderyBox.remove()
    function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  // removeAllChildNodes(zineBox);

  })

}

let regeneration = function(){
  let regenerateButton = document.getElementById("regenerate")
  let newTextButton = document.getElementById("newText")
  let newPhotosButton = document.getElementById("newImages")
  let applyButton = document.querySelector("div.applyButton")

  regenerateButton.addEventListener("click", function(){

    function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  removeAllChildNodes(zineBox);
  removeAllChildNodes(contentBox)

  generateTitle()
  introInsert()
  questionRandomizer()
  generateQandA()
  runBindery()
  setTimeout(function(){
    bookSetup()
  }, loadTime)
  })

  newPhotosButton.addEventListener("click", function(){

        function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
      }

      removeAllChildNodes(zineBox);
      removeAllChildNodes(contentBox)

      generateTitle()
      introInsert()
      generateQandANewImage()
      runBindery()
      setTimeout(function(){
        bookSetup()
      }, loadTime)
  })

  applyButton.addEventListener("click", function(){

        function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
      }

      removeAllChildNodes(zineBox);
      removeAllChildNodes(contentBox)

      generateTitle()
      introInsert()
      questionRandomizer()
      generateQandA()
      runBindery()

      setTimeout(function(){
        bookSetup()
        colorChanger()
      }, loadTime)

  })


}



//Bindery Rules

let titleBreak = Bindery.PageBreak({
  selector: 'img.titleBreak',
  position: 'after'
})
let questionBreak = Bindery.PageBreak({
  selector: 'h2',
  position: 'after',
  continue: 'next'
})
let qFinishedBreak = Bindery.PageBreak({
  selector: 'h2',
  position: 'before',
  continue: 'next'
})
let textSplit = Bindery.Split({
  selector: 'p',
  toNext: 'to-next',
  fromPrevious: 'from-previous'
})
let runningHeader = Bindery.RunningHeader({
  render: (pageInfo) => pageInfo.isLeft
    ? `${pageInfo.number}`
    : `${pageInfo.number}`
})
let pageColorRule = Bindery.createRule({
    eachPage: function(page, book) {
      if (page.number == 1) {
        page.background.style.backgroundColor = document.getElementById("accentColor").value;
      }
    }
  })
let imageBleed = Bindery.FullBleedPage({
  selector: 'img',
  continue: 'same',
  rotate : 'inward'
})







//FUNctions

let generateTitle = function(){
  let zineTitle = document.createElement('h1')
  let zineSubtitle = document.createElement("h5")
  zineTitle.classList.add("bookTitle")
  let titleNode = document.createTextNode("Space 1026");
  let subtitleNode = document.createTextNode("experimental archive")

  zineTitle.appendChild(titleNode)
  zineSubtitle.appendChild(subtitleNode)

  contentBox.insertBefore(zineSubtitle, contentBox.firstChild);
  contentBox.insertBefore(zineTitle, contentBox.firstChild);


}

// let generateIntro = function(){
//   let introH2 = document.createElement('h2')
//   let introduction = document.createElement('p')
//
//
// }

let questionRandomizer = function(){

  let quesArray = answers.interview
  let quesArrayLength = quesArray.length

  function shuffle(array){
    var m = quesArrayLength, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = quesArray[m];
      quesArray[m] = quesArray[i];
      quesArray[i] = t;

    }

  return array;
  }

  shuffle()
  originalQuesArray = quesArray
}

let generateQandA = function(){
  let imageNameArray = imgNames.name
  let quesArray = answers.interview
  let quesArrayLength = quesArray.length

  quesArray.forEach((item, i) => {
    let theQuestion = item.question
    let questionDiv = document.createElement('div')
    questionDiv.classList.add("questionDiv" + i)
    questionDiv.classList.add("questionDiv")
    let questionText = document.createElement("h2")
    let questionNode = document.createTextNode(theQuestion)
    let questionString = theQuestion.split(" ").join("")
    questionText.setAttribute("id" ,questionString)


    questionText.appendChild(questionNode)

    contentBox.appendChild(questionText)

    function shuffle(array){
      var m = item.answer.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = item.answer[m];
        item.answer[m] = item.answer[i];
        item.answer[i] = t;

      }

    return array;
    }

    shuffle()
    let zineLengthSlider = document.getElementById("zineLength")

    // if (item.answer.length > zineLengthSlider.value && item.answer.length <= 4 ) {
    //   console.log("minimizer ran");
    //   item.answer.length = zineLengthSlider.value
    //   console.log(item.answer.length);
    // }

    // if (zineLengthSlider.value < 4 && item.answer.length > zineLengthSlider.value) {
    //
    //   item.answer.length = (zineLengthSlider.value)
    //
    // }
    // console.log(zineLengthSlider.value);


    // console.log(item.answer.length);
    item.answer.forEach((ob, j) => {

      // console.log(j);
      let name = ob.name
      let answerText = ob.response
      let answerNode = document.createTextNode('"' + answerText + '"')
      let answerComp = document.createElement("p")
      let nameNode = document.createTextNode(name)
      let nameComp = document.createElement("em")
      let imageLikelySlider = document.getElementById("imageQuantity")
      answerComp.appendChild(answerNode)
      nameComp.appendChild(nameNode)

      if (j <= (zineLengthSlider.value - 1) && zineLengthSlider.value < 4) {

        contentBox.appendChild(nameComp)
        contentBox.appendChild(answerComp)
      }
      if (zineLengthSlider.value == 4) {

        contentBox.appendChild(nameComp)
        contentBox.appendChild(answerComp)
      }
      let imageLikely = imageLikelySlider.value
      let imageDecider = Math.floor(Math.random() * imageLikely)

      if (imageDecider == 1) {
        let imagePicker = Math.floor(Math.random() * imageNameArray.length)
        let image = new Image()
        image.src = "/assets/img/"+imageNameArray[imagePicker]
        contentBox.appendChild(image)
      }
    });



  });
}

let generateQandANewImage = function(){
  let imageNameArray = imgNames.name
  let quesArray = originalQuesArray

  let quesArrayLength = originalQuesArray.length

  originalQuesArray.forEach((item, i) => {
    let theQuestion = item.question
    let questionDiv = document.createElement('div')
    questionDiv.classList.add("questionDiv" + i)
    questionDiv.classList.add("questionDiv")
    let questionText = document.createElement("h2")
    let questionNode = document.createTextNode(theQuestion)



    questionText.appendChild(questionNode)

    contentBox.appendChild(questionText)


    item.answer.forEach((item, i) => {
      let name = item.name
      let answerText = item.response
      let answerNode = document.createTextNode('"' + answerText + '"')
      let answerComp = document.createElement("p")
      let nameNode = document.createTextNode(name)
      let nameComp = document.createElement("em")
      let imageLikelySlider = document.getElementById("imageQuantity")
      answerComp.appendChild(answerNode)
      nameComp.appendChild(nameNode)
      contentBox.appendChild(nameComp)
      contentBox.appendChild(answerComp)
      let imageLikely = imageLikelySlider.value

      let imageDecider = Math.floor(Math.random() * imageLikely)

      if (imageDecider == 1) {
        let imagePicker = Math.floor(Math.random() * imageNameArray.length)
        let image = new Image()
        image.src = imageNameArray[imagePicker]
        contentBox.appendChild(image)
      }
    });



  });
}

let colorChanger = function(){
  let colorSelector = document.getElementById("accentColor")
  let color = colorSelector.value
  let light = true
  let dark = false
  function lightOrDark(color) {

      // Variables for red, green, blue values
      var r, g, b, hsp;

      // Check the format of the color, HEX or RGB?
      if (color.match(/^rgb/)) {

          // If RGB --> store the red, green, blue values in separate variables
          color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

          r = color[1];
          g = color[2];
          b = color[3];
      }
      else {

          // If hex --> Convert it to RGB: http://gist.github.com/983661
          color = +("0x" + color.slice(1).replace(
          color.length < 5 && /./g, '$&$&'));

          r = color >> 16;
          g = color >> 8 & 255;
          b = color & 255;
      }

      // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
      hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
      );

      // Using the HSP value, determine whether the color is light or dark
      if (hsp>127.5) {
        light = true
        dark = false
          return 'light';

      }
      else {
        light = false
        dark = true
          return 'dark';

      }
  }
  lightOrDark(color)

  let titlePage = document.querySelector("h1.bookTitle")
  let h2s = document.querySelectorAll("h2")
  let runningHeaderVar = document.querySelectorAll(".📖-running-header")
  console.log(runningHeaderVar);

  h2s.forEach((item, i) => {
    item.style.color = color
  });

  runningHeaderVar.forEach((item, i) => {
    item.style.color = color
  });


  if (light == true) {
    titlePage.style.color = "black"
  }
  if (dark == true) {
    titlePage.style.color = "white"
  }


}

let paraText = []
let introP = []
let introFunc = function(){
  let paragraphs = document.querySelectorAll("p.introP")
  let introTitle = document.createElement("h2")

  for (var i = 0; i < 7; i++) {
    introP[i] = document.createElement("p")
  }
  paragraphs.forEach((item, i) => {
    paraText[i] = item.innerHTML
    introP[i].innerHTML = paraText[i]

  });



  // let introNode1 = document.createTextNode()

}
let introInsert = function(){
  let introTitle = document.createElement("h2")
  let introTitleNode = document.createTextNode("Introduction")
  introTitle.appendChild(introTitleNode)
  contentBox.appendChild(introTitle)
  for (var i = 0; i < introP.length; i++) {
    contentBox.appendChild(introP[i])
  }
}

let colophon = function(){
  let coloP = []
  let coloTitle = document.createElement("h2")
  let coloTitleNode = document.createTextNode("Credits")
  coloTitle.appendChild(coloTitleNode)
  contentBox.appendChild(coloTitle)
  for (var i = 0; i < 9; i++) {
    coloP[i] = document.createElement("p")
    coloP[i].classList.add("coloText")
    contentBox.appendChild(coloP[i])
  }
  coloP[0].innerHTML = 'Design and Development by <a href="https://leetusman.com">Lee Tusman</a> and <a href="http://bycalebstone.com/">Caleb Stone</a>.'
  coloP[1].innerHTML = 'Oral history with current Space 1026 members. Space 1026 is Al San Valentin, Andrew Jeffrey Wright, Angela Rio, Ben Woodward, Eileen Wolf Echikson, Jacob Marcinek, Jacqueline Quinn, James Bonney, June Armstrong, Lance Simmons, Maximillian Lawrence, Miriam Singer, Nate Harris, O. Roman Hasiuk, Rachel Gordon, Will Laren, Michael Gerkovich, Troy Taylor, David Rysk and more.'
  coloP[2].innerHTML = 'All images and artwork are copyright their respective owners and were originally posted on social media, platforms or websites by or for Space 1026. <a href="mailto:leetusman@gmail.com">Get in touch</a> to have an image removed.'
  coloP[3].innerHTML = 'Experimental Archive Space is built with open source software. Source code on <a href="https://github.com/caleblstone/space1026">GitHub</a>.'
  coloP[4].innerHTML = '<a href="https://evanbrooks.info/bindery/">Bindery.js</a> by Evan Brooks'
  coloP[5].innerHTML = 'Images were collected via the following software:'
  coloP[6].innerHTML = '<a href="https://github.com/antiboredom/flickr-scrape">Scrape Flickr</a> by Sam Lavigne and contributors'
  coloP[7].innerHTML = '<a href="https://github.com/arc298/instagram-scraper">Instagram Scraper</a> by arc298 and contributors'
  coloP[8].innerHTML = '<a href="https://www.gnu.org/software/wget/">Wget</a> by Hrvoje Nikšić and contributors'

}

let fullScreenZine = function(){
  let printButton = document.querySelector("button.📖-btn")

  let viewSelector = document.getElementById("bindery-choose-view")

  printButton.style.display = "none";

  viewSelector.addEventListener("change", function(){
    console.log("im Over");
    let selectorValue = document.querySelector("div.📖-select-val")
    let binderyZoomContent = document.querySelector("div.📖-zoom-content")
    let zineFrame = document.querySelector("div.zineFrame")

    //if selector value is print and it's not fullscreen, then make it fullscreen (remove zine from the zineBox)
    if (viewSelector.value == "print" && body.firstChild !== zineBox) {

      body.insertBefore(zineBox, body.firstChild)
      binderyZoomContent.style.backgroundColor = "white"
      body.style.overflow = "visible"
      zineBox.style.left = "0px"
      zineBox.style.top = "0px"
      zineBox.style.width = "100%"
      zineBox.style.overflow = "visible"

      //TEST
      setTimeout((function(){

        let printButton2 = document.querySelector("button.📖-btn")
	printButton2.style.display = "inline-block";

      }), 1000);
    }

    //if we're not printing, come out of fullscreen (return zine to its box)
    if (viewSelector.value !== "print" && body.firstChild == zineBox) {
          zineFrame.insertBefore(zineBox, zineFrame.childNodes[2])
      binderyZoomContent.style.backgroundColor = "#D6D6D6"
      body.style.overflow = "hidden"
      zineBox.style.overflow = "scroll"

      printButton.style.display = "none";
    }

      fullScreenZine()
  })




}

// controls.addEventListener("mousever", function(){
//   fullScreenZine()
// })
