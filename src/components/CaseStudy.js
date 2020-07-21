import React from "react";

const CaseStudy = () => {
  return (
    <div id="anchor-casestudy" className="row row1 casestudies">
      <div className="row-inner casestudy-inner">
        <div className="casestudy-heading">
          <h3 className="heading-block-background">Case Studies</h3>
        </div>

        <div className="casestudy-container">
          <a href="">
            <div className="casestudy">
              <div className="casestudy-overlay">
                <div className="casestudy-title">
                  <h3>Ausbeds: Scripted Chatbot</h3>
                </div>
                <div className="casestudy-author">Cortex Copywriter</div>
              </div>
              <div className="casestudy-logo"></div>
              <div className="casestudy-image">
                <img
                  src="/images/blog_stock-10.jpg"
                  alt="Cortex Copywriter Case Study: Ausbeds Chatbot"
                />
              </div>
            </div>
          </a>

          <a href="">
            <div className="casestudy">
              <div className="casestudy-overlay">
                <div className="casestudy-title">
                  <h3>Blaze Research: Rebrand</h3>
                </div>
                <div className="casestudy-author">Cortex Copywriter</div>
              </div>
              <div className="casestudy-logo"></div>
              <div className="casestudy-image">
                <img
                  src="/images/blog_stock-5.jpg"
                  alt="Cortex Copywriter Case Study: Rebranding Campaign"
                />
              </div>
            </div>
          </a>

          <div className="casestudy">
            <div className="casestudy-overlay">
              <div className="casestudy-title">
                <h3>
                  COMING IN 2020 – StartScale: <em>'Uber of Marketing'</em>
                </h3>
              </div>
              <div className="casestudy-author"></div>
            </div>
            <div className="casestudy-logo"></div>
            <div className="casestudy-image">
              <img
                src="/images/blog_stock-6.jpg"
                alt="Cortex Copywriter Case Study: Rebranding Campaign"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
