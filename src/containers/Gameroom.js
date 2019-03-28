import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { loadQuestion } from "../actions";
import { bindActionCreators } from "redux";

class Gameroom extends Component {
  componentDidMount() {
    this.props.loadQuestion();
  }

  render() {
    console.log(this.props.question)
    return (
    <div>
      Gameroom stuff goes here
      <h1>{this.props.question}</h1>
    </div>
    )
  }
}

function mapStateToProps({question}) {
  return {question}; 
}

function mapDispatchToProps(dispatch) { //allows our functions to be dispatched to the middleware then reducers when the functions are invokes
  return bindActionCreators({loadQuestion}, dispatch); //({action creators}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Gameroom);