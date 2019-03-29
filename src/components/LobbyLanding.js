import React, { Component } from "react";
import '../index.css';
import LobbyPlayers from '../containers/LobbyPlayers';
import { addCPU, gameState } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class LobbyLanding extends Component {

  componentDidMount() {
    this.props.gameState();
  }

  onClickStartGame(e) {
    e.preventDefault()
    this.props.addCPU();
  }

  render() {
    return (
      <div className="container-fluid landing-container">
        <div className="landing-top-row">
          <div className="ready-div">
            <input
              type="submit"
              value="Push to Ready!"
              className="btn-lg btn-primary px-5 lets-go-button"
              onClick={this.onClickStartGame.bind(this)}
            />
          </div>
          <div className="col landing-col">
            <p>PSc5 Trivia</p>
            <h4 className="waiting">waiting for the game the start</h4>
          </div>
        </div>
        <LobbyPlayers />
      </div>
    )
  }
}

function mapStateToProps({gameData}) {
  return {gameData}; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCPU, gameState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyLanding);