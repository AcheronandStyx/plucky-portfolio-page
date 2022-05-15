import React from "react";
import headshot from "../../assets/images/Headshot.jpg";

function About() {
  return (
    <section id="about-me">
      <div className="my-headshot">
        <h2>About Me</h2>
        <img
          src={headshot}
          alt="Picture of Matt Danielson"
          className="headshot"
        />
      </div>
      <div className="biography">
        <p>
          I recently entered the world of software development by enrolling in
          the University of Minnesota's coding bootcamp. I had long been
          interested in coding and took the plunge in December of 2021 and moved
          from dabbling to fully investing myself in learning to code as part of
          the UMN's coding boot camp.
        </p>
      </div>
    </section>
  );
}

export default About;
