import React from "react";
import "../styles/components/FeatureCard.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
