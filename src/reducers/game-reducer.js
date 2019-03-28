import _ from "lodash";
import { LOAD_QUESTIONS } from "../actions";



  export default function(state = [], action) {

  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.payload.data.results;
    default:
      return state;
  }
}