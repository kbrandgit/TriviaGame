import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { gameState } from "../actions";
import { bindActionCreators } from "redux";

class ScoreBoard extends Component {
  
  componentDidMount() {
    this.props.gameState();
  }

  renderPlayers() {
    return _.map(this.props.gameData.players, player => {
      return (
        <li className="players" key={player.id}>
        name: {player.name} score: {player.score}
        </li>
      )
    })

  }

  render() {
    //console.log('scoreboard: ', this.props.gameData)
    return (
    <div>
      <ul className="playersGroup">
          {this.renderPlayers()}
        </ul>
    </div>
    )
  }
}

function mapStateToProps({gameData}) {
  return {gameData}; 
}

function mapDispatchToProps(dispatch) { //allows our functions to be dispatched to the middleware then reducers when the functions are invokes
  return bindActionCreators({gameState}, dispatch); //({action creators}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ScoreBoard);