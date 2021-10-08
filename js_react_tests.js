let profile_move=document.querySelector("#profile-picture")
let head_line=document.querySelector("#welcome")


profile_move.addEventListener("click",function(){
      //head_line.style.color= "red";
      profile_move.animate([
        {transform:"translateY(0px)"},
        {transform:"translateX(500px"}
      ],
      {duration:3000},
      {iterations: 1})
      
    })
//Below is an effort to get the initial position of the container as pixels
let lefty=document.querySelector("#prof-pic-container");
console.log(lefty.style.right)