function button() {
    let playButton = document.querySelector(".playButton");
let enjoy = "<strong>Enjoy🎬</strong>"
playButton.innerHTML = enjoy;

}

let buttonElement = document.querySelector(".playButton");
buttonElement.addEventListener("click", button);



function listButton() {
    
let list = document.querySelector(".myListButton");
list.innerHTML = "Added😊";
}

let listElement = document.querySelector(".myListButton");
listElement.addEventListener("click", listButton);

     

