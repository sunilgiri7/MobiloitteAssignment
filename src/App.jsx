import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
