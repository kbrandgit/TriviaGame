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
      { id: 0, name: 'Knox', score: 0, color: '#43BCCD' },
      { id: 1, name: 'Alice', score: 0, color: '#662E9B' },
      { id: 2, name: 'Richie', score: 0, color: '#F04E37' },
      { id: 3, name: 'Rick', score: 0, color: '#F86624' },
      { id: 4, name: 'Carl', score: 0, color: '#F9C80E' },
      { id: 5, name: 'Jason', score: 0, color: '#3d3d3d' },
      { id: 6, name: 'Rich', score: 0, color: '#756540' },
      { id: 7, name: 'Aaron', score: 0, color: '#43a855' },
      { id: 8, name: 'Edward', score: 0, color: '#3c60c4' },
      { id: 9, name: 'Sean', score: 0, color: '#c63bbb' }
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
