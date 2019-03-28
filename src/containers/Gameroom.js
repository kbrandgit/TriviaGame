import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { loadQuestions} from "../actions";
import { bindActionCreators } from "redux";
import ScoreBoard from './ScoreBoard'

class Gameroom extends Component {
  
  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    if (this.props.questions) {
    console.log(this.props.questions)

    const question = this.props.questions[0];
    //console.log('question: ', question)
    return (
    <div>
      Category: {question.category}
      <p></p>
      Question: {question.question}
      <p></p>
      Answers: {question.correct_answer}{question.incorrect_answers}
      <ScoreBoard />
    </div>
    )
  } else {
    return <div>loading...</div>
  }
}
}

function mapStateToProps({questions}) {
  return {questions}; 
}

function mapDispatchToProps(dispatch) { //allows our functions to be dispatched to the middleware then reducers when the functions are invokes
  return bindActionCreators({loadQuestions}, dispatch); //({action creators}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Gameroom);