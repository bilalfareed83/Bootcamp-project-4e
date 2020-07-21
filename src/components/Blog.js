import React from "react";

const Blog = () => {
  return (
    <div id="anchor-blog" className="row row2 blogs">
      <div className="row-inner blog-inner">
        <div className="blog-heading">
          <h3 className="heading-block-background">Blogs</h3>
        </div>
        <div className="blog-container" id="articles">
          <a href="">
            <div className="blog">
              <div className="blog-overlay">
                <div className="blog-title">
                  <h3>
                    What is digital copywriting? The evolution of copy from{" "}
                    <em>Mad Men</em> to <em>UX writing</em> and <em>beyond</em>
                  </h3>
                </div>
                <div className="blog-author">Cortex Copywriter</div>
              </div>
              <div className="blog-logo"></div>
              <div className="blog-image">
                <img
                  src="/images/blog_stock-1.jpg"
                  alt="What is Digital Copywriting?"
                />
              </div>
            </div>
          </a>

          <a href="">
            <div className="blog">
              <div className="blog-overlay">
                <div className="blog-title">
                  <h3>
                    Vertical video to virtual vistas. How will the screenwriting
                    craft evolve?
                  </h3>
                </div>
                <div className="blog-author">Cortex Copywriter</div>
              </div>
              <div className="blog-logo"></div>
              <div className="blog-image">
                <img
                  src="/images/blog_stock-0.jpg"
                  alt="Vertical Video to Virtual Vistas"
                />
              </div>
            </div>
          </a>

          <a href="">
            <div className="blog">
              <div className="blog-overlay">
                <div className="blog-title">
                  <h3>
                    Top 3 ways psychology-based copywriting satisfies user needs
                  </h3>
                </div>
                <div className="blog-author">Cortex Copywriter</div>
              </div>
              <div className="blog-logo"></div>
              <div className="blog-image">
                <img
                  src="/images/blog_stock-4.jpg"
                  alt="Psychology-based Copywriting"
                />
              </div>
            </div>
          </a>

          <a href="">
            <div className="blog">
              <div className="blog-overlay">
                <div className="blog-title">
                  <h3>Enhance your UX writing with FBI negotiation tactics</h3>
                </div>
                <div className="blog-author">Cortex Copywriter</div>
              </div>
              <div className="blog-logo"></div>
              <div className="blog-image">
                <img
                  src="/images/blog_stock-7.jpg"
                  alt="UX writing and FBI Negotiation"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
