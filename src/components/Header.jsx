import React from "react";
import "../styles/components/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header1">
          <div className="logo0">
            <img
              src="src/assets/Group 1171277618.png"
              alt="Bustatrx Logo"
              className="logo"
            />
          </div>
          <div className="originalGame0">
            <img
              src="src/assets/original.png"
              alt="original"
              className="originalGame"
            />
          </div>
          <div className="gameDate0">
            <img
              src="src/assets/Group 1171277254.png"
              alt="since"
              className="gameDate"
            />
          </div>
          <div className="playBtn0">
            <img
              src="src/assets/Frame 9.png"
              alt="submit"
              className="playBtn"
            />
          </div>
        </div>
        <div className="header2">
          <img src="src/assets/house.png" alt="slice" className="house" />
          <img src="src/assets/wagered.png" alt="slice2" className="wagered" />
          <img
            src="src/assets/bankroll.png"
            alt="slice3"
            className="bankroll"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
