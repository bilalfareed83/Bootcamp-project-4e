import React from "react";

const Tech = () => {
  return (
    <div id="anchor-techniques" className="row row1 techniques">
      <div className="row-inner column">
        <div className="row-title techniques_top_title" id="techniques">
          <h3 className="heading-block-background">Interactive Techniques</h3>
          <p>
            Allow me to demonstrate some{" "}
            <a href="blog/top-3-ways-psychology-hacks-minds.html">
              psychology-based copywriting
            </a>{" "}
            techniques I apply to optimize user experiences and boost conversion
            rates.
          </p>
        </div>

        <div className="techniques_advertisement">
          <img
            className="techniques-logo-with-name"
            src="/images/logo_desktop_with_name.svg"
          />
          <div className="techniques_description">
            <div className="techniques_description_slogan">
              {" "}
              <i className="fas fa-info-circle"></i> Technique Description{" "}
            </div>
            <div className="techniques_description_title">Rhyme</div>
            <div className="techniques_description_text">
              People perceive rhyming phrases as more truthful.
            </div>
          </div>

          <div className="techniques_options">
            <div className="techniques_option_header ">
              Select copywriting technique ▾
            </div>
            <div className="techniques_option techniques_option_activated">
              Rhyme
            </div>
            <div className="techniques_option">Bizarre</div>
            <div className="techniques_option">Because</div>
            <div className="techniques_option">Approach</div>
            <div className="techniques_option">Avoid</div>
            <div className="techniques_option">Attack</div>
            <div className="techniques_option">Approach &amp; Attack</div>
          </div>

          <div className="techniques_container">
            <div className="techniques_text">
              <div className="techniques_text_column left-padding">
                <div
                  className="heading"
                  style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                ></div>
                <div
                  className="subheading"
                  style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  Technique Example
                </div>
                <div
                  className="smallheading"
                  style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  Augmented Reality (AR) Glasses:
                </div>
                <div
                  className="paragraph"
                  style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                >
                  At last, interactive AR experiences that{" "}
                  <span className="underline">feel real</span>.
                </div>
              </div>
            </div>
            <div
              className="techniques_bg"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              <img src="/images//tech-ar.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
