import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Bustatrx. All Rights Reserved.</p>
      <nav>
        <a href="/backtesting">Backtesting</a>
        <a href="/leaderboard">Leaderboard</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
