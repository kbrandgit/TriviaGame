import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameState } from '../actions';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class LobbyPlayers extends Component {
  componentDidMount() {
    this.props.gameState();
  }

  renderBadges = () => {
    return this.props.gameData.players.map(index => {
      return (
        <div
          key={index.id}
          className="col-2 card player-card ml-3 border-35"
          style={{ backgroundColor: index.color }}
        >
          {index.name}
        </div>
      );
    });
  };

  render() {
    console.log(this.props.gameData.players); //executes twice. Once on the initial render, and then once when componentDidMount changes the
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
