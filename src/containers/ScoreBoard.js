import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { gameState } from '../actions';
import { bindActionCreators } from 'redux';

class ScoreBoard extends Component {
  componentDidMount() {
    this.props.gameState();
  }

  renderPlayers() {
    return _.map(this.props.gameData.players, player => {
      return (
        <div
          className="playersGroup row players-row justify-content-center"
          key={player.id}
        >
          <div className="players col scoreboard-card card flexbox">
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
    //console.log('scoreboard: ', this.props.gameData)
    return (
      <div className="col-3 scoreboard-col" style={{ height: '60vh' }}>
        {this.renderPlayers()}
      </div>
    );
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
