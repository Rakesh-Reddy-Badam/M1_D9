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
        bingoBoardContainerNode.appendChild(newNumberNode)
    }
}

//const randomNumber=Math.floor(Math.random()*77)
const selectNumber = function(event){
    const currentlySelectedNumber = Math.floor(Math.random()*77)
    // SELECT NUMBER THAT HAS CHOOSEN BY THE RANDOM NUMBER
    const randomNumber=document.getElementsByClassName('number')  // This give us the HTML element that has been clicked
    for(i=0;i<randomNumber.length;i++){
        if(parseInt(randomNumber[i].innerText)===currentlySelectedNumber){
            randomNumber[i].classList.add("selected")
        }
    }
}
