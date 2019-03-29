import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { gameState } from '../actions';
import { bindActionCreators } from 'redux';

class ScoreBoard extends Component {
  componentDidMount() {
    this.props.gameState();
  }

  highlightUser = () => {
    if (document.getElementById(1) !== null) {
      document.getElementById(1).classList += ' highlight';
    }
  };

  renderPlayers() {
    this.props.gameData.players.sort((a, b) => b.score - a.score);

    return _.map(this.props.gameData.players, player => {
      return (
        <div
          className="playersGroup row players-row justify-content-center"
          key={player.id}
        >
          <div
            className="players col scoreboard-card card flexbox"
            id={player.id}
            style={{ backgroundColor: player.color }}
          >
            {this.highlightUser()}
            <p>
              {player.name}{' '}
              <span style={{ float: 'right' }}>{player.score}</span>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}

function mapStateToProps({ gameData }) {
  return { gameData };
}

function mapDispatchToProps(dispatch) {
  //allows our functions to be dispatched to the middleware then reducers when the functions are invokes
  return bindActionCreators({ gameState }, dispatch); //({action creators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard);
