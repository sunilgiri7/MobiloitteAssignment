import React from "react";
import "../styles/components/MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="features">
        <div className="feature-card">
          <h2>SOCIAL & REAL TIME</h2>
          <img src="src\assets\social.png" alt="Social & Real Time" className="feature-icon" />
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
        </div>
        <div className="feature-card">
          <h2>PROVABLY FAIR</h2>
          <img src="src\assets\provably1.png" alt="Provably Fair" className="feature-icon" />
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
        </div>
        <div className="feature-card">
          <h2>BE THE BANKROLL</h2>
          <img src="src\assets\bankroll.png" alt="Be The Bankroll" className="feature-icon" />
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
        </div>
      </section>
      
      <section className="info-section">
        <div className="info-card how-it-works">
        <img src="src/assets/howitwork.png" alt="Bustatrx Logo" className="bustatrx-logo" />
          <h2>HOW DOES IT WORK</h2>
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        
        <div className="info-card whats-bustatrx">
          <img src="src/assets/bustatrx.png" alt="Bustatrx Logo" className="bustatrx-logo" />
          <h2>WHAT'S BUSTATRX ?</h2>
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        
        <div className="info-card enhanced-privacy">
          <img src="src/assets/privacy.png" alt="Enhanced Privacy" className="info-icon" />
          <h2>ENHANCED PRIVACY</h2>
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        
        <div className="info-card advanced-autobet">
          <img src="src/assets/autobet.png" alt="Advanced Autobet" className="info-icon" />
          <h2>ADVANCED AUTOBET</h2>
          <p>Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </section>
    </main>
  );
};

export default MainContent;