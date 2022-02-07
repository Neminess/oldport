let textAre=document.querySelector("#textPlace");
let buttoner=document.querySelector("#addText");



buttoner.addEventListener("click", function(){
   let addBelo=document.querySelector("#existingText");
   let textAdded=textAre;
   let createDiv=document.createElement("div");
   addBelo.appendChild(createDiv, createDiv.textContent=textAdded.value);
});
 