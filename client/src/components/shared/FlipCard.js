import React from 'react';
import './FlipCard.css'; // Ensure to create this CSS file for styling

const FlipCard = ({ frontImage, frontTitle, backContent }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt={frontTitle} />
          <h3>{frontTitle}</h3>
        </div>
        <div className="flip-card-back">
          <h4>Details</h4>
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
