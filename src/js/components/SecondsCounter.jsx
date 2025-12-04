import React from "react";
import "../../styles//index.css";

function SecondsCounter({ seconds }) {
  const padded = String(seconds).padStart(6, "0");
  const digits = padded.split("");

  return (
    <div className="counter-container">
      <div className="counter-card">
        <span className="counter-icon">⏱</span>
      </div>
      {digits.map((digit, index) => (
        <div className="counter-card" key={index}>
          <span className="counter-digit">{digit}</span>
        </div>
      ))}
    </div>
  );
}

export default SecondsCounter;