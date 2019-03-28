import React from 'react';
import '../index.css';
import LobbyPlayers from '../containers/LobbyPlayers';

function LobbyLanding() {
  return (
    <div className="container-fluid landing-container">
      <div className="landing-top-row">
        <div className="ready-div">
          <input
            type="submit"
            value="Push to Ready!"
            className="btn-lg btn-primary px-5 lets-go-button"
          />
        </div>
        <div className="col landing-col">
          <p>PSc5 Trivia</p>
          <h4 className="waiting">waiting for the game the start</h4>
        </div>
      </div>
      <LobbyPlayers />
    </div>
  );
}

export default LobbyLanding;
