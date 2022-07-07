import React from 'react';
//This renders, but the content is not shown 24.05.2022
function About(){
    console.log("About");
    return (
        <section id="mainContent">
          <h2>About me</h2>
          <p>My name is Noora Hiltunen and I am a student at <a href="https://www.taitotalo.fi" target="_blank" rel="noopener noreferrer">Taitotalo.</a></p>
          <p>I've been learning coding since 2019, so I do not have that much experience yet. I am in search of a job as a Junior Front End dev or Front End Trainee. See contact-page for my contact information.</p>
     </section>);
}
console.log("About outside");
export default About;