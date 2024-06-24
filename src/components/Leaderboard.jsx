import React from "react";
import "../styles/components/Leaderboard.css";

const Leaderboard = () => {
  const players = [
    { name: "Umair", profit: 4.68 },
    { name: "Arvind", profit: 4.18 },
    { name: "Faizan", profit: 3.56 },
    { name: "Shubham", profit: 2.75 },
    { name: "Swati", profit: 2.52 },
  ];

  return (
    <section className="leaderboard">
      <h2>Biggest Winners</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <span>
              {index + 1}. {player.name}
            </span>
            <span>{player.profit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Leaderboard;
