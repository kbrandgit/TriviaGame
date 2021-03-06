import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameState } from '../actions';
import { bindActionCreators } from 'redux';

class LobbyPlayers extends Component {
  renderBadges = () => {
    return this.props.gameData.players.map(index => {
      return (
        <div
          key={index.id}
          className="col-2 card player-card border-35"
          style={{ backgroundColor: index.color }}
        >
          {index.name}
        </div>
      );
    });
  };

  render() {
    if (this.props.gameData != '') {
      return (
        <div className="row landing-lobby-bottom-row justify-content-around align-items-center">
          {this.renderBadges()}
        </div>
      );
    } else return <div>There was an error</div>;
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
)(LobbyPlayers);
