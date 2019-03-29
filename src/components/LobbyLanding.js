import React, { Component } from 'react';
import '../index.css';
import LobbyPlayers from '../containers/LobbyPlayers';
import { addCPU, gameState } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LobbyLanding extends Component {
  componentDidMount() {
    this.props.gameState();
  }

  onClickStartGame(e) {
    e.preventDefault();
    for (let i = 0; i < 9; i++) {
      this.props.addCPU();
    }
    this.props.history.push('/gameroom');
  }

  render() {
    return (
      <div className="container-fluid landing-container">
        <div className="landing-top-row row align-items-center">
          <input
            type="submit"
            value="Go!"
            className="btn-lg btn-primary px-5 lets-go-button"
            onClick={this.onClickStartGame.bind(this)}
          />
          <div className="col landing-col">
            <p>PSc5 Trivia</p>
            <h4 className="waiting">press Go! to start the game</h4>
          </div>
        </div>
        <LobbyPlayers />
      </div>
    );
  }
}

function mapStateToProps({ gameData }) {
  return { gameData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCPU, gameState }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyLanding);
