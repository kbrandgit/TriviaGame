import axios from "axios";
export const ADD_CPU = "add_cpu";
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
    players: [{id:1,name:"Knox",score:0}]
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

export function addCPU() {
  return {
    type: ADD_CPU,
    payload: "cpu"
  }
}