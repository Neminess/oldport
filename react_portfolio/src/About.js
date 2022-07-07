import React from 'react';
//This renders, but the content is not shown 24.05.2022
function About(){
    console.log("About");
    return (
        <section id="mainContent">
          <h2>About me</h2>
          <p>My name is Noora Hiltunen and I am a student at <a href="https://www.taitotalo.fi" target="_blank" rel="noopener noreferrer">Taitotalo.</a></p>
          
          <article name="backgroundInfo">
               <h2>Short background information</h2>
               <p>I have been learning web-coding for about 3 years now, the last two in school. The first year I learned about html and CSS, and how to use them together. 
                    In school, we were taught about JS, one course of PhP, Wordpress and more.</p>
               <p>My favourite techs to use are JS, React JS and SQL. I am also interested in Wordpress for the simplicity and fast deployment it enables.</p>
          </article>
     </section>);
}
console.log("About outside");
export default About;