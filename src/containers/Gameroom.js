import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadQuestions, gameState, updateScore, updateRound } from '../actions';
import { bindActionCreators } from 'redux';
import ScoreBoard from './ScoreBoard';

class Gameroom extends Component {
  componentDidMount() {
    this.props.loadQuestions();
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  cpuTurn() {
    const question = this.props.questions[this.props.gameData.currentQuestion];
    const answersArray = question.incorrect_answers.concat(
      question.correct_answer
    );
    const currentQuestion = this.props.gameData.currentQuestion;
    const correctIndex = answersArray.indexOf(
      this.props.questions[currentQuestion].correct_answer
    );
    for (let i = 1; i < 10; i++) {
      const cpuGuess = Math.floor(Math.random() * 4 + 1);
      if (cpuGuess === correctIndex + 1) {
        this.props.updateScore(i);
      }
    }
  }

  onClickListItem(e) {
    const userAnswer = e.currentTarget.textContent;
    const currentQuestion = this.props.gameData.currentQuestion;
    if (
      userAnswer ===
      decodeURIComponent(this.props.questions[currentQuestion].correct_answer)
    ) {
      // e.currentTarget.classList += ' hello-there';
      console.log('right: ', e.currentTarget);
      this.props.updateScore(0); //<---makes the answers shuffle on correct answer
      //trigger amazing css crap here to highlight answer green
    } else {
      // e.currentTarget.classList += ' goodbye-there';
      console.log('wrong: ', e.currentTarget);
      //trigger amazing css crap here to highlight answer red
    }
    this.cpuTurn(); //<----shuffles answers on any answer click
    this.finishQuestionRound();
  }
  finishQuestionRound() {
    const currentQuestion = this.props.gameData.currentQuestion;
    if (currentQuestion < 9) {
      this.props.updateRound(currentQuestion + 1);
    } else {
      this.props.history.push('/gameover');
    }
  }

  renderAnswers() {
    const question = this.props.questions[this.props.gameData.currentQuestion];
    const shuffledAnswers = question.incorrect_answers.concat(
      question.correct_answer
    );

    this.shuffleArray(shuffledAnswers);
    return _.map(shuffledAnswers, q => {
      return (
        <div
          className="answerGroup col-5 card answer-card px-2 border-35"
          onClick={this.onClickListItem.bind(this)}
          key={q}
        >
          {decodeURIComponent(q)}
        </div>
      );
    });
  }

  render() {
    const question = this.props.questions[this.props.gameData.currentQuestion];

    if (this.props.questions.length > 0) {
      return (
        <div className="container-fluid">
          <div className="row" style={{ height: '60vh' }}>
            <div className="col-9 question-col">
              <h2 className="question-header">
                {decodeURIComponent(question.question)}
              </h2>
              <div id="category">{decodeURIComponent(question.category)}</div>
              <div className="question-number">
                Question {this.props.gameData.currentQuestion + 1} of{' '}
                {this.props.questions.length}
              </div>
              <div id="triangle" />
            </div>
            <div className="col-3 scoreboard-col" style={{ height: '60vh' }}>
              <ScoreBoard />
            </div>
          </div>
          <div className="row justify-content-around align-items-center answers-row">
            {this.renderAnswers()}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps({ questions, gameData }) {
  return { questions, gameData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadQuestions, gameState, updateScore, updateRound },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gameroom);
