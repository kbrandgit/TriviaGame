import { combineReducers } from "redux";
import GameReducer from './game-reducer';
import ScoreBoardReducer from './scoreboard-reducer';

const rootReducer = combineReducers({
  questions: GameReducer, //questions, answers, etc
  gameData: ScoreBoardReducer //players, player scores
});

export default rootReducer;