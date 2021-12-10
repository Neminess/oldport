let changling=document.querySelector("#textPlace");
let buttoner=document.querySelector("#addText");



buttoner.addEventListener("click", function(){
   let neDiv=document.createElement("div");
   const appendComment=document.createTextNode(changling.value);
   neDiv.appendChild(appendComment);
   document.body.insertBefore(neDiv,changling);
   
});
 