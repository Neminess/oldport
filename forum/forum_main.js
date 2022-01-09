
let area=document.querySelector("#replyToPost");


//sends text from textarea to posted replies
function TextToWindow(){
    console.log("test")
    let addBelow= document.querySelector("#existing");
    let textToAdd=document.querySelector("#replyToPost");
    let created=document.createElement("div");
    addBelow.appendChild(created,created.textContent=textToAdd.value);
};
    
