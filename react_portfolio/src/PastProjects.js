import React from "react";

function PastProjects(){
    return(
        <section name="pastProjects">
          <h2><u>Former HTML/CSS-projects</u></h2>
          <ul>
          <li  className="project" name="rotating-space-objects">-Old project from Kuntoutussäätiö: <a href="../pastProjects/balls2.html"> Space</a></li>
          <h2><u>Codecamp practice projects</u></h2>
          <li className="project" name="survey-form"><a href="../pastProjects/surveyForm.html">Survey form</a></li>
          <li className="project" name="product-page"><a href="../pastProjects/productPage.html" target="_blank" rel="noreferrer">Product page </a></li>
          </ul>
     </section>
    )
};
export default PastProjects;