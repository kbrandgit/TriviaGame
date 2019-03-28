import React from 'react';
import '../index.css';

function LobbyLanding() {
  return (
    <div className="container-fluid landing-container">
      <div className="row landing-top-row align-items-center">
        <div className="col landing-col">
          <p>PSc5 Trivia</p>
          <h4 className="waiting">waiting for the game the start</h4>
        </div>
      </div>
      <div className="row landing-bottom-row align-items-center justify-content-center">
        <p style={{ color: 'white' }}>stuff goes here</p>
      </div>
    </div>
  );
}

export default LobbyLanding;
