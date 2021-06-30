let zineButton = document.querySelector("div.navZineMaker")
let disclaimer = document.querySelector("div.disclaimer")
let zineBox = document.querySelector("div.zineProper")
let contentBox = document.getElementById("content")


zineButton.addEventListener("click", function(){

  setTimeout(function(){
    console.log(contentBox);

    Bindery.makeBook({
      content: {
        selector: "#content",
        // url: 'index.html',
      },
      pageSetup: {
      size: { width: '4in', height: '6in' },
      margin: { top: '40pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
      },
      rules:[
        titleBreak, runningHeader, emPage
      ]
    });
  }, 500)


  setTimeout(function() {
    let zinePreview = document.querySelector("div.📖-root")
    let binderyControls = document.querySelector("div.📖-controls")
    // let binderyControlsChild = document.querySelector("div.📖-print-options")
    let binderyZoomContent = document.querySelector("div.📖-zoom-content")
    let binderyPrintButton = document.querySelector("button.📖-btn-print")
    console.log(binderyPrintButton);
    zineBox.appendChild(zinePreview)
    zinePreview.style.backgroundColor = "#D6D6D6"
    binderyControls.style.backgroundColor = "#D6D6D6"
    binderyZoomContent.style.backgroundColor = "#D6D6D6"
    binderyControls.style.fontFamily = "Space Grotesk"


    homeButton.addEventListener("click", function(){
      zinePreview.remove()
    })
   }, 500);


})


let titleBreak = Bindery.PageBreak({
  selector: 'img.titleBreak',
  position: 'after'
})

let runningHeader = Bindery.RunningHeader({
  render: (pageInfo) => pageInfo.isLeft
    ? `${pageInfo.number}`
    : `${pageInfo.number}`
})

let emPage = Bindery.FullBleedSpread({
    selector: 'h2',
    continue: 'next',

})

let formatter = function(){
  //1. choose a random zine type to generate
  //2. generate consistent title
  //3. choose random order of questions
  //4. choose random answers to questions
  //5. check length of question answers
  //6. decide on page layout based on answer length
  //7. generate questions and answers






}
formatter()
