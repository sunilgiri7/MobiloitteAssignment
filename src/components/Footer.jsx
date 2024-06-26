import React from "react";
import "../styles/components/Footer.css";
import bustatrxLogo from "../assets/bustatrx.png";
import twitterIcon from "../assets/twitter.png";
import telegramIcon from "../assets/telegram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={bustatrxLogo} alt="BUSTATRX" className="blogos" />
          <span className="logo-text">BUSTATRX</span>
        </div>
        <nav className="footer-nav">
          <a href="/backtesting">Backtesting</a>
          <span className="nav-separator">|</span>
          <a href="/leaderboard">Leaderboard</a>
          <span className="nav-separator">|</span>
          <a href="/terms-of-service">Terms Of Service</a>
        </nav>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" className="social-icon">
            <img src={telegramIcon} alt="Telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
