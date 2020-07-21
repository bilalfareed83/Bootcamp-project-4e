import React from "react";

const ChartBot = () => {
  return (
    <div id="anchor-chatbot" className="row row2 chatbot-bg">
      <div className="row-inner chatbot-inner">
        <div className="chatbot-title">
          <h3 className="heading-block-background">
            Select avatars to switch chatbot voice &amp; tone
          </h3>
        </div>

        <div className="chat-application" id="chat-application">
          <div className="style-swap_outer">
            <div className="chatbot-info mobile-only">Swipe and select </div>

            <div className="style-swap">
              <div className="button-container">
                <div className="button-style">
                  <div className="chat-avatar">
                    <div
                      id="character_community2"
                      className="topbar-desktop-character-anim-persona character_community"
                    ></div>
                  </div>
                  <p>Community</p>
                </div>

                <div className="button-style">
                  <div className="chat-avatar">{/* images */}</div>
                  <p className="style-swap_active">Corporate</p>
                </div>

                <div className="button-style style-swap-active">
                  <div className="chat-avatar">{/* images */}</div>
                  <p className="style-swap-active">Technology</p>
                </div>

                <div className="button-style">
                  <div className="chat-avatar">{/* images */}</div>
                  <p>Luxury</p>
                </div>

                <div className="button-style">
                  <div className="chat-avatar">{/* images */}</div>
                  <p>Entertainment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="chat_container">
            <div className="chatbot_restart">
              Restart <i className="fas fa-undo"></i>
            </div>
            <div className="row">
              <div
                id="msgnum1"
                className="msg msg-q"
                style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                <span className="timestamp"> 3:45pm </span>{" "}
                <div className="chatbot-text">
                  {" "}
                  Hi, my cutting-edge conversational interface will guide you 🤖
                </div>
              </div>
            </div>
            <div className="row">
              <div
                id="msgnum2"
                className="msg msg-q"
                style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                <span className="timestamp"> 3:45pm </span>{" "}
                <div className="chatbot-text">
                  {" "}
                  I programmed this interface with useful UX writing.
                </div>
              </div>
            </div>
            <div className="row">
              <div
                id="msgnum3"
                className="msg msg-q"
                style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                <span className="timestamp"> 3:45pm </span>{" "}
                <div className="chatbot-text">
                  {" "}
                  Want to get in touch or keep chatting?
                </div>
              </div>
            </div>
          </div>
          <div
            className="reply_container"
            style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
          >
            <div
              className="reply"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              Keep chatting!
            </div>
            <div
              className="reply"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              Get in touch!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBot;
