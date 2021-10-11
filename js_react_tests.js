let profile_move=document.querySelector("#profile-picture")
profile_move.addEventListener("click",function(){
      //let styler=window.getComputedStyle(prof_cont); 
   // profile_move.style.marginLeft= 1+"%";}
      
//https://javascript.info/js-animation
let startTime = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - startTime;

  if (timePassed >= 3000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  profile_move.style.left = timePassed / 30 + '%';}
  
})
/*
//function that runs until timer stops
//function replaces left-value of pic from initial to 50% gradually

  let timber=2500;
  while(timber>0){
    profile_move.style.marginleft=50+"%";
    timber-200;
  }*/
