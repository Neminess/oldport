import React from 'react';

function Contact(){
    return(
        <section>
          <article id="contact-info">
               <h1>Contact information</h1>
               <p>noora.hiltunen26@gmail.com</p>
          </article>
          <article id="comments">
               <div id="textContainer">
                    <p id="existingText">Hello there</p>
               </div>
               <textarea id="textPlace"></textarea>
               <button id="addText">Click here</button>
          </article>
     </section>
    )
};
export default Contact;