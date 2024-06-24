import React from "react";
import FeatureCard from "./FeatureCard";
import "../styles/components/MainContent.css";

const features = [
  {
    icon: "src/assets/Group 1171277268.png",
    title: "Social & Real Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/path/to/icon2.png",
    title: "Provably Fair",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/path/to/icon3.png",
    title: "Be the Bankroll",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="features">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <section className="additional-info">
        <h2>How Does It Work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>What's Bustatrx?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>Enhanced Privacy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>Advanced Autobet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </main>
  );
};

export default MainContent;
