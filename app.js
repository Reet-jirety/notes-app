const notes = document.querySelector(".input-box");
const notesContainer = document.querySelector(".notes");
const Cbtn = document.querySelector(".btn");

Cbtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
    }
})