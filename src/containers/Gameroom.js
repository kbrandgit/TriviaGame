import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadQuestions, gameState, updateScore, updateRound } from '../actions';
import { bindActionCreators } from 'redux';
import ScoreBoard from './ScoreBoard';

class Gameroom extends Component {
  constructor(props) {
  super(props) 
    this.state = {playerCorrect: false,
                  isShuffled: false}
  }
  componentDidMount() {
    this.props.loadQuestions();
    this.roundTimer();
  }


  roundTimer() {
    var x = 0;
    var intervalID = window.setInterval(() => {
      if (this.state.playerCorrect == true) {
        this.props.updateScore(1);
        this.setState({playerCorrect: false});
      }
      this.cpuTurn();
      this.setState({isShuffled : false})
      this.finishQuestionRound();
       if (++x === 10) {
           window.clearInterval(intervalID);
       }
    }, 10000);
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
    for (let i = 2; i <= 10; i++) {
      const cpuGuess = Math.floor(Math.random() * 4 + 1);
      if (cpuGuess === correctIndex + 1) {
        this.props.updateScore(i);
      }
    }
  }

  onClickListItem(e) {
    const userAnswer = e.currentTarget.textContent;
    const currentQuestion = this.props.gameData.currentQuestion;
    if (userAnswer === decodeURIComponent(this.props.questions[currentQuestion].correct_answer)) {
      this.setState({playerCorrect: true});
    }
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
    //this.shuffleArray(shuffledAnswers);

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
  };

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
              <div id="triangle" />
            </div>
            <ScoreBoard />
          </div>
          <div className="row justify-content-around align-items-center answers-row">
            {this.renderAnswers()}
          </div>
        </div>
      )
    } else {
      return <div>loading...</div>;
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
