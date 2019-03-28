import _ from "lodash";
import { GAME_STATE } from "../actions";

export default function(state = '', action) {
  switch (action.type) {
    case GAME_STATE:
      return action.payload;
    default:
      return state;
  }
}