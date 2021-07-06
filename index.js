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

const randomNumber=document.getElementsByClassName('number')  // This give us the HTML element that has been clicked
const selectNumber = function(event){
    const currentlyRandomNumber = Math.floor(Math.random()*77)
    // SELECT NUMBER THAT HAS CHOOSEN BY THE RANDOM NUMBER
    for(i=0;i<randomNumber.length;i++){
        console.log(typeof randomNumber[i].innerText)
        if(parseInt(randomNumber[i].innerText)===currentlyRandomNumber){
            randomNumber[i].classList.add("selected")
        }
    }
}
