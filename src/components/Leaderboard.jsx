import React from "react";
import "../styles/components/Leaderboard.css";

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "UMAIR", profit: 4.68 },
    { rank: 2, name: "ARVIND", profit: 4.18 },
    { rank: 3, name: "FAIZAN", profit: 3.56 },
    { rank: 4, name: "SHUBHAM", profit: 2.75 },
    { rank: 5, name: "SWATI", profit: 2.52 },
  ];

  return (
    <>
      <div className="leaderboard-container">
        <div className="featured-card">
          <img
            src="src/assets/winnerCup.png"
            alt="Winner Cup"
            className="winner-cup"
          />
          <div className="card-content">
            <h2>BIGGEST WINNERS</h2>
            <img
              src="src/assets/bustatrx.png"
              alt="Bustatrx Logo"
              className="bustatrx-logo"
            />
            <h2 className="winner">Bustatrx</h2>
            <p>
              Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The
              Visual Form Of A Document Or A Typeface Without Relying On
              Meaningful Content. Lorem Ipsum Is A Placeholder Text Commonly
              Used To Demonstrate The Visual Form Of A Document.
            </p>
          </div>
        </div>
        <div className="leaderboard-table">
          <div className="table-header">
            <span className="player">PLAYER</span>
            <span>PROFIT</span>
          </div>
          {players.map((player, index) => (
            <div key={index} className="table-row">
              <div className="rank-badge">{player.rank}</div>
              <span className="player-name">{player.name}</span>
              <span className="player-profit">
                <img
                  src="src/assets/profit.png"
                  alt="Coin"
                  className="coin-icon"
                />
                {player.profit}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="learnMore">
        <h1>Learn More</h1>
        <p>
          If You still have questions or simply want to learn more you can check
          our help docs or our bustatrx
        </p>
        <img src="src/assets/Frame 9.png" />
      </div>
    </>
  );
};

export default Leaderboard;
