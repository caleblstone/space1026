
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
    size: { width: '4in', height: '6in' },
    margin: { top: '40pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
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

  let quesArray = answers.question
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

    let answerText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut semper enim. Mauris eu venenatis massa. Mauris rhoncus faucibus tortor vitae porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis scelerisque dolor et turpis consequat vehicula. Donec id risus eu libero bibendum ornare. Proin id libero augue. Sed in aliquet enim, et gravida libero. Integer eros libero, molestie at efficitur quis, congue ac ex. Integer tempor vel tellus sed auctor. Cras sed bibendum neque. Nulla facilisi. Quisque pretium non orci sit amet rutrum. Curabitur id nisi sed dolor porttitor dignissim. Nulla libero leo, placerat quis faucibus eget, tincidunt volutpat dui Pellentesque a lectus ac tellus venenatis bibendum ut ac erat. Nullam in tincidunt ligula. Aliquam iaculis turpis felis, eget suscipit nunc vestibulum ut. Curabitur ac mattis est. Curabitur pulvinar, enim ut lobortis auctor, tellus massa suscipit orci, sed suscipit magna augue id magna. Pellentesque semper mauris nec ultricies rhoncus. Quisque porta posuere viverra. Donec sit amet gravida tortor."

    let answerText2 = "Duis volutpat, odio et porta molestie, eros augue sodales ante, eu facilisis nisi felis vitae tortor. In venenatis convallis elit ut lobortis. Duis nibh nibh, pellentesque porta aliquet sit amet, interdum quis libero. Donec blandit lorem quis turpis consequat porttitor. Fusce consequat purus ut mauris fermentum pretium. Sed laoreet accumsan scelerisque. Cras vel mollis leo, eget tempor odio. Mauris lorem nisi, mollis sit amet egestas ac, porttitor quis orci. Maecenas vitae nisi et dolor hendrerit pulvinar. Ut luctus dictum tincidunt. Curabitur nisi risus, tempor in metus eget, viverra lobortis massa. Aliquam ultricies cursus sapien, placerat dapibus urna blandit ac. Suspendisse potenti. Suspendisse aliquet nisl arcu, in accumsan dui sagittis a. Integer fringilla lacinia justo et placerat. Vivamus mollis mi a turpis luctus sollicitudin. Curabitur eu pellentesque erat. Nullam nec lorem sem. Cras iaculis, nisl placerat accumsan ullamcorper, urna lacus fermentum magna, pretium dapibus nisl est quis mauris."

    let answerText3 = "Proin vitae orci sit amet purus efficitur auctor. Fusce venenatis justo vitae diam dignissim, quis vulputate urna ultrices. Nullam tempus, augue tempor commodo mollis, odio nisl pulvinar ante, et elementum orci erat non magna. Aliquam mi urna, sodales posuere magna nec, feugiat imperdiet tortor. Pellentesque eu tortor eget ante sodales ultrices et eget velit. Maecenas sem nunc, tincidunt cursus iaculis quis, elementum nec ante. Integer sit amet blandit dui, ultricies pellentesque diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget dolor nec eros rhoncus interdum nec eu augue. Aenean efficitur, elit blandit ultrices interdum, libero nisl egestas felis, quis imperdiet tortor lorem non massa. Phasellus sed metus a lectus dignissim ullamcorper. Donec eu dui ultricies elit imperdiet finibus non eu sapien. Suspendisse sed convallis elit. Ut sem nisl, vehicula id venenatis vitae, cursus nec mauris. Phasellus non nisi dictum eros venenatis dictum in at lacus. Aliquam eget ex fringilla, suscipit est et, condimentum dolor. Morbi fermentum lacus metus, sed venenatis elit mollis sed. "

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
    let binderyBox = document.querySelector("div.📖-measure-area")
    binderyBox.remove()
  })
}


//Binery Rules

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
