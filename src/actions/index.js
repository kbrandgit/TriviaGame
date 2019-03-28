import axios from "axios";

export const LOAD_QUESTIONS = "load_question";
export const GAME_STATE = "gameData";
export const INCREMENT_SCORE = "incrementScore";
export const INCREMENT_QUESTION = "incrementQuestion";



const ROOT_URL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986";


export function loadQuestions() {

  const questions = axios.get(`${ROOT_URL}`);

  return {
    type: LOAD_QUESTIONS,
    payload: questions
  };
}


export function gameState() {
  let gameData = { 
    currentQuestion: 0,
    winner: null,
    players: [
      { name: 'Knox', score: 0, color: '#43BCCD' },
      { name: 'Alice', score: 0, color: '#662E9B' },
      { name: 'Richie', score: 0, color: '#F04E37' },
      { name: 'Rick', score: 0, color: '#F86624' },
      { name: 'Carl', score: 0, color: '#F9C80E' },
      { name: 'Jason', score: 0, color: '#3d3d3d' },
      { name: 'Rich', score: 0, color: '#756540' },
      { name: 'Aaron', score: 0, color: '#43a855' },
      { name: 'Edward', score: 0, color: '#3c60c4' },
      { name: 'Sean', score: 0, color: '#c63bbb' }
    ]
  };
  return {
    type: GAME_STATE,
    payload: gameData
  };
}

export function updateScore(id) {
  return {
    type: INCREMENT_SCORE,
    payload: id
  };
}

export function updateRound(nextQuestion) {
  return {
    type: INCREMENT_QUESTION,
    payload: nextQuestion
  };
}
