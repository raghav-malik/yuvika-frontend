import React from 'react';
import './Confirmation.css';

function Confirmation({ onAnother }) {
  return (
    <div className="confirmation-container">
      <h2>Thank you, Yuvi! 💖</h2>
      <p>Your grievance has been sent!<br/>He will get back to you very soon!<br/>(He will think about it)</p>
      <button onClick={onAnother}>Submit Another</button>
    </div>
  );
}

export default Confirmation; 