import _ from "lodash";
import { LOAD_QUESTION } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case LOAD_QUESTION:
      return action.payload.Results[0].Question;
    default:
      return state;
  }
}