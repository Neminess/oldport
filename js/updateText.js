let changling=document.querySelector("#textPlace");
const existText=document.querySelector("#existingText");
let buttoner=document.querySelector("#addText");
let tekstia=document.querySelector("#textContainer")

buttoner.addEventListener("click", function(){
   let what=document.createElement("div");
   const appendComment=document.createTextNode(changling.value);
   what.appendChild(appendComment);
   document.body.insertBefore(what,changling);
})
 