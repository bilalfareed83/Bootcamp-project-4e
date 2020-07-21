import React from "react";

const Home = () => {
  return (
    <div className="main">
      <div className="row row2 header">
        <div className="row-inner">
          <div id="anchor-top" className="header-container">
            <div className="header-container-text">
              <div className="header-container-description">
                <div className="header-container-title">
                  <div className="header-container-title-2">CORTEX</div>
                  <div className="header-container-title-3">COPYWRITER</div>
                </div>
                <div className="header-container-paragraph">
                  <p className="intro-title">
                    Enhance your communications with psychology-based
                    copywriting and UX writing
                  </p>
                </div>
                <div className="header-container-cta">Send a message</div>
              </div>
            </div>
            <div className="header-container-image">
              <img
                src="/images/Intro_Front_Layer.svg"
                className="header-front"
              />
              <img src="/images/Intro_Featured_Image_Empty.svg" />
              <img src="/images/Intro_Brain.svg" className="header-brain" />
            </div>
          </div>
        </div>
        <div className="header-container-bg"></div>
      </div>{" "}
    </div>
  );
};

export default Home;
