import React from 'react';
//This renders, but the content is not shown 24.05.2022
function About(){
    console.log("About");
    return (
        <section id="mainContent">
          <h2>About me</h2>
          <p>My name is Noora Hiltunen and I am a student at <a href="https://www.taitotalo.fi" target="_blank" rel="noopener noreferrer">Taitotalo.</a></p>
          
          <article id="kuntoutus">
          <h2>At Kuntoutussäätiö</h2>
               <p>During my time at Kuntoutussäätiö(which can be best described as a "rehabilitation centre for unemployed people"), I got introduced to HTML/CSS, video-editing and photography.</p>
               <p>I learned how a basic HTML-page works and what CSS does. I created my own little projects, with the help of internet.</p>
               <p>One thing that helped me learn there, was the staff. They were extremely encouraging, friendly and all-around great people who helped me start the journey to the world of coding.</p>
               <p>Eventually my time at Kuntoutussäätiö came to an end and I applied to Tietix.</p>
          </article>
          <article id="tietix">
               <h2>Tietix</h2>
               <p>Tietix is a workshop focused on computers, although they do have a packing-faction as well. There the customers package incoming merch that is then sent to Kierrätyskeskus etc places for sale.</p>
               <p>I went to the coding-side/computer-side of Tietix. There, I was taught the basics of Python, got a small list of resources to use for studying and practice-projects.</p>
               <p>Tietix is the main reason for my current situation. I never thought I could be a coder, but the encouragement given there, and at Kuntoutussäätiö, gave me the kick to start studying more.</p>
               <p>When I had to leave Tietix, I applied to two different schools: Omnia and Taitotalo. I wasn't accepted to Omnia, but got a place at Taitotalo (which, funny enough, is an organisation that came to be from the unification of AmiEdu and AEL. Both are my former schools).</p>
               <p>All in all, it's been a long road to get here and I can wholeheartedly say that, without those two places that helped me find my own way, I wouldn't be where I am now.</p>
          </article>
     </section>);
}
console.log("About outside");
export default About;