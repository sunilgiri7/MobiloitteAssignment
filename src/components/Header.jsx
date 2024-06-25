import React from "react";
import "../styles/components/Header.css";
import logoImg from "../assets/Group 1171277618.png";
import originalImg from "../assets/original.png";
import sinceDateImg from "../assets/Group 1171277254.png";
import playBtnImg from "../assets/Frame 9.png";
import houseImg from "../assets/house.png";
import wageredImg from "../assets/wagered.png";
import bankrollImg from "../assets/bankroll2.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logoImg} alt="Bustatrx Logo" className="logo" />
        <img src={originalImg} alt="The Original Crash Game" className="original-game" />
        <img src={sinceDateImg} alt="TRX Gambling Since 2014" className="game-date" />
        <button className="play-btn">
          <img src={playBtnImg} alt="Play Now" />
        </button>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <img src={houseImg} alt="House Edge" />
          {/* <p>HOUSE EDGE</p> */}
          {/* <p className="stat-value">1%</p> */}
        </div>
        <div className="stat-item"> 
          <img src={wageredImg} alt="Wagered" />
          {/* <p>WAGERED</p> */}
          {/* <p className="stat-value">2,200,000</p> */}
        </div>  
        <div className="stat-item">
          <img src={bankrollImg} alt="Bankroll" className="bankroll" />
          {/* <p>BANKROLL</p> */}
          {/* <p className="stat-value">1,900</p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;