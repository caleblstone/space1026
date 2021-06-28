
let zineButton = document.querySelector("div.navZineMaker")
let contentBox = document.getElementById("content")
let zineBox = document.querySelector("div.zineProper")


let answers
fetch("assets/questions/answers.json")
.then(answers => {
   return answers.json();

})
.then(QandA => answers = QandA);

let imgNames
fetch("assets/imageNames/imgNames.json")
.then(images => {
   return images.json();
})
.then(Images => imgNames = Images);



zineButton.addEventListener("click", function(){
  formatter()
  Bindery.makeBook({
    content: '#content',
    pageSetup: {
    size: { width: '5in', height: '8in' },
    margin: { top: '48pt', inner: '24pt', outer: '36pt', bottom: '20pt' },
    },
    rules:[
      titleBreak, questionBreak, qFinishedBreak, textSplit, runningHeader
    ]
  });
  setTimeout(function(){
    bookSetup()

  }, 500)

})



let formatter = function(){
  let randomImage = function(){
    let imageDecider2 = Math.floor(Math.random() * imgNames.name.length)
    let imageName2 = imgNames.name[imageDecider]
    theImage.src = headerImageName
  }
  //1. choose a random zine type to generate
  //2. generate consistent title
  //3. choose random order of questions
  //4. choose random answers to questions
  //5. check length of question answers
  //6. decide on page layout based on answer length
  //7. generate questions and answers

//1. Select Zine + Generate Title
  let zineOptions = [
    "Zine 1",
    "Zine 2",
    "Zine 3",
    "Zine 4"
  ]
  let zineDecider = Math.floor(Math.random() * 4)
  console.log(zineDecider);
  let chosenZine = zineOptions[zineDecider]
  console.log(chosenZine);
  let zineTitle = document.createElement('h1')
  zineTitle.classList.add("bookTitle")
  let titleNode = document.createTextNode(chosenZine);
  zineTitle.appendChild(titleNode)
  contentBox.appendChild(zineTitle)

//2. Add random Image to the Title Page
  let imageDecider = Math.floor(Math.random() * imgNames.name.length)
  let headerImageName = imgNames.name[imageDecider]
  let headerImage = new Image()
  headerImage.src = headerImageName
  headerImage.classList.add("titleBreak")
  contentBox.appendChild(headerImage)

//Randomize the order of the questions

  let quesArray = answers.questions
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
  console.log(JSON.stringify(quesArray[0]));
//Randomize order of answers to questions
  // console.log(quesArray.childNodes);
  // quesArray.childNodes.forEach((item, i) => {
  //
  //   console.log(Object.keys(item));
  //   function shuffle2(array){
  //     var m = item.length, t, i;
  //
  //     // While there remain elements to shuffle…
  //     while (m) {
  //
  //       // Pick a remaining element…
  //       i = Math.floor(Math.random() * m--);
  //
  //       // And swap it with the current element.
  //       t = item[m];
  //       item[m] = item[i];
  //       item[i] = t;
  //     }
  //
  //   return array;
  //   }
  //   shuffle2()
  //   // console.log(item);
  // });

//7. Generate Questions
  quesArray.forEach((item, i) => {
    let theQuestion = Object.keys(item)
    let questionDiv = document.createElement('div')
    questionDiv.classList.add("questionDiv" + i)
    questionDiv.classList.add("questionDiv")
    let questionText = document.createElement("h2")
    let questionNode = document.createTextNode(theQuestion)
    let imageDecider2 = Math.floor(Math.random() * imgNames.name.length)
    console.log(imageDecider);
    console.log(imageDecider2);
    let imageName2 = imgNames.name[imageDecider2]
    let theImage = new Image()
    theImage.src = imageName2
    questionText.appendChild(questionNode)
    questionDiv.appendChild(theImage)
    questionDiv.appendChild(questionText)
    contentBox.appendChild(questionDiv)

    let answerText1 = quesArray[0]
    console.log(quesArray[0]);

    let answerNode = document.createTextNode(answerText1)
    let answerComp = document.createElement("p")
    answerComp.appendChild(answerNode)
    questionDiv.appendChild(answerComp)
  });

//generate answers


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

  removeAllChildNodes(binderyBox);
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
  // continue: 'next'
})
let qFinishedBreak = Bindery.PageBreak({
  selector: 'p',
  position: 'after',
  continue: 'next'
})
let textSplit = Bindery.Split({
  selector: 'p',
  toNext: 'to-next',
  fromPrevious: 'from-previous',
})
let runningHeader = Bindery.RunningHeader({
  render: (pageInfo) => pageInfo.isLeft
    ? `${pageInfo.number}`
    : `${pageInfo.number}`
})




//FUNctions
