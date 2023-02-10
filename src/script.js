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






function theAlist() {

let Alist = document.querySelector(".alist");
let AlistInfo = "Romance, rivalry and radical mystery collide as a group of teens attend a remote island sleepaway camp in this suspenseful, supernatural drama.";
Alist.innerHTML = AlistInfo;
}

let AlistElement = document.querySelector(".row");
AlistElement.addEventListener("click", theAlist);

