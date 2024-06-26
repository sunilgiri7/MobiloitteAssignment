import React from "react";
import "../styles/components/MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="features">
        <div className="feature-card">
          <h2>SOCIAL & REAL TIME</h2>
          <img
            src="src/assets/social.png"
            alt="Social & Real Time"
            className="feature-icon"
          />
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img src="src/assets/socialGraph.png" className="socialGraph" />
        </div>
        <div className="feature-card">
          <h2>PROVABLY FAIR</h2>
          <img
            src="src/assets/provably1.png"
            alt="Provably Fair"
            className="feature-icon"
          />
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img src="src/assets/provablyGraph.png" className="provablyGraph" />
        </div>
        <div className="feature-card">
          <h2>BE THE BANKROLL</h2>
          <img
            src="src/assets/bankroll.png"
            alt="Be The Bankroll"
            className="feature-icon"
          />
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img src="src/assets/bankrollGraph.png" className="bankrollGraph" />
        </div>
      </section>

      <section className="info-section">
        <div className="column1">
          <div className="info-card how-it-works">
            <div className="info-content">
              <img
                src="src/assets/howitwork.png"
                alt="How it works"
                className="info-icon2"
              />
              <h2>HOW DOES IT WORK</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
              </p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>
          </div>

          <div className="info-card enhanced-privacy">
            <div className="info-content">
              <img
                src="src/assets/privacy.png"
                alt="Enhanced Privacy"
                className="privacy"
              />
              <h2>ENHANCED PRIVACY</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
              </p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="info-card whats-bustatrx">
            <div className="info-content">
              <img
                src="src/assets/bustatrx.png"
                alt="Bustatrx Logo"
                className="info-icon"
              />
              <h2>WHAT'S BUSTATRX ?</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
              </p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>
          </div>

          <div className="info-card advanced-autobet">
            <div className="info-content">
              <img
                src="src/assets/autobet.png"
                alt="Advanced Autobet"
                className="info-icon2"
              />
              <h2>ADVANCED AUTOBET</h2>
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
              </p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
