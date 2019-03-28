import axios from "axios";

export const LOAD_QUESTIONS = "load_question";
export const GAME_STATE = "gameData";



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
    currentQuestion: 7,
    winner: null,
    players: [
      {id: 0, name: "Knox", score: 0},
      {id: 1, name: "Alice", score: 0},
      {id: 2, name: "Richie", score: 0},
      {id: 3, name: "Rick", score: 0},
      {id: 4, name: "Carl", score: 0},
      {id: 5, name: "Jason", score: 0},
      {id: 6, name: "Rich", score: 0},
      {id: 7, name: "Aaron", score: 0},
      {id: 8, name: "Edward", score: 0},
      {id: 9, name: "Sean", score: 0}
    ] }
  return {
    type: GAME_STATE,
    payload: gameData
  };
}