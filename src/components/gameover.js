import React from 'react';
import './gameover.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameState } from '../actions';
import { bindActionCreators } from 'redux';
import ScoreBoard from '../containers/ScoreBoard';

// Component to notify players the game has finished
// Displays the winner's name and final score
// Renders a back button to navigate to Landing Page

class Gameover extends React.Component {
  render() {
    let winner = this.props.gameData.players.reduce((max, player) =>
      player.score > max.score ? player : max
    );
    return (
      <div className="background">
        <div className="gameover-container container">
          <div
            className="gameover-row row align-items-center"
            style={{ height: '100vh' }}
          >
            <div className="gameover-col col-4">
              <h2 className="gameover-text">
                <em>{winner.name} won!</em>
              </h2>
              <h3 className="gameover-score">Score: {winner.score}</h3>

              <Link
                to="/landing"
                id="btn-playagain"
                className="btn"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Play Again
              </Link>
            </div>
            <div className="gameover-scoreboard-wrapper">
              <ScoreBoard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ gameData }) {
  return { gameData };
}

export default connect(
  mapStateToProps,
  null
)(Gameover);
