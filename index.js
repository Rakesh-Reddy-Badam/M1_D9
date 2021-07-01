window.onload = function(){
    displayEntireNumbers()
}
const displayEntireNumbers = function(){
    // We get the bingoBoard container
    let bingoBoardContainerNode = document.getElementById("bingoBoard-container")

    for (let boardNumber = 1; boardNumber <= 76; boardNumber++) {
        let newNumberNode = document.createElement("div")
        newNumberNode.innerText = boardNumber
        newNumberNode.classList.add("number") 
        newNumberNode.onclick = selectNumber
        bingoBoardContainerNode.appendChild(newNumberNode)
    }
}

//const randomNumber=Math.floor(Math.random()*77)
const selectNumber = function(event){
    const currentlySelectedNumber = getCurrentrNumber()
    if (currentlySelectedNumber !== null) { 
        currentlySelectedNumber.classList.remove("selected")
    }
    // SELECT NUMBER THAT HAS CHOOSEN BY THE RANDOM NUMBER
    const clickedNumber = event.currentTarget  // This give us the HTML element that has been clicked
    clickedNumber.classList.add("selected")    // We apply "selected" class to it
}
const getCurrentrNumber = function(){
    return document.querySelector(".selected")
}