export const LOAD_QUESTIONS = "load_question";
export const GAME_STATE = "gameData";

export function loadQuestions() {
  const questions = {
    "response_code": 0, 
    "results": [
      { "category": "Science: Computers", 
      "type": "multiple", 
      "difficulty": "hard", 
      "question": "Who is the original author of the realtime physics engine called PhysX?", 
      "correct_answer": "NovodeX", 
      "incorrect_answers": ["Ageia", "Nvidia", "AMD"] }] };
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
      {name: "Knox", score: 0},
      {name: "Alice", score: 0},
      {name: "Richie", score: 0},
      {name: "Rick", score: 0},
      {name: "Carl", score: 0},
      {name: "Jason", score: 0},
      {name: "Rich", score: 0},
      {name: "Aaron", score: 0},
      {name: "Edward", score: 0},
      {name: "Sean", score: 0}
    ] }
  return {
    type: GAME_STATE,
    payload: gameData
  };
}