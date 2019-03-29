import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { loadQuestions, gameState, updateScore, updateRound } from "../actions";
import { bindActionCreators } from "redux";
import ScoreBoard from './ScoreBoard'

class Gameroom extends Component {
  
  componentDidMount() {
    this.props.loadQuestions();
    this.props.gameState();
  }
  
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

onClickListItem(e) {
  const userAnswer = e.currentTarget.textContent;
  const currentQuestion = this.props.gameData.currentQuestion;
  if (userAnswer === this.props.questions[currentQuestion].correct_answer) {
    console.log("winner")
    this.props.updateScore(0);
    //trigger amazing css crap here to highlight answer green
  } else {
    console.log("loser")
    //trigger amazing css crap here to highlight answer red
  }
  this.finishQuestionRound();
}

finishQuestionRound() {
  const currentQuestion = this.props.gameData.currentQuestion
  if (currentQuestion < 9)
  {
  this.props.updateRound(currentQuestion+1);
  } else {
    this.props.history.push('/gameover')
  }
}

renderAnswers() {
  const question = this.props.questions[this.props.gameData.currentQuestion];
  const shuffledAnswers = question.incorrect_answers.concat(question.correct_answer)
  this.shuffleArray(shuffledAnswers);
  return _.map(shuffledAnswers, q => {

    return (
      <li className="answerGroup" onClick={this.onClickListItem.bind(this)} key={q}>
        {decodeURIComponent(q)}
      </li>
    )
  })
}

  render() {
    const question = this.props.questions[this.props.gameData.currentQuestion];

    if (this.props.questions.length > 0) {
    return (
      <div>
        
        Category: {decodeURIComponent(question.category)}
        <p />
        Question: {decodeURIComponent(question.question)}
        <p />
        <ul>{this.renderAnswers()}</ul>
        <ScoreBoard />
      </div>
    );
  } else {
      return <div>loading...</div>
  }
}
}

function mapStateToProps({questions, gameData}) {
  return {questions, gameData}; 
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({loadQuestions, gameState, updateScore, updateRound}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Gameroom);