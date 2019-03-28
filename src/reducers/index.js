import { combineReducers } from "redux";
import GameReducer from './game-reducer';

const rootReducer = combineReducers({
  question: GameReducer
});

export default rootReducer;