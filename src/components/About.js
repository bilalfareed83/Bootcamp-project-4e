import React from "react";

const About = () => {
  return (
    <div id="anchor-about" class="row row2 about-container about-container-bg">
      <div class="row-inner">
        <div class="about-container-column">
          <div class="about-container-avatar">
            <div className="about-image">
              <img style={{ height: "300px" }} />
            </div>
            <div class="about-image-name">
              <strong>Nathan Mudaliar</strong>, the Cortex Copywriter
            </div>
          </div>
        </div>

        <div class="about-container-column">
          <div class="about-text">
            <h3 class="heading-block-background">About</h3>
            <p>
              {" "}
              My copywriting and UX writing draws on abilities developed in the
              psychological sciences.{" "}
            </p>{" "}
            <p>
              {" "}
              Expertise in visual perception, behavioral motivation, and
              decision-making allows me to engineer words that convert customers
              and guide users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
