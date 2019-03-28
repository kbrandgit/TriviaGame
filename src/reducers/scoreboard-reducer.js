import { GAME_STATE, INCREMENT_SCORE, INCREMENT_QUESTION } from "../actions";

export default function(state = '', action) {
  switch (action.type) {
    case GAME_STATE:
      return action.payload;
    case INCREMENT_SCORE:
     return Object.assign({}, state, {
       players: state.players.map((player, index) => {
         if (index === action.payload) {
           return Object.assign({}, player, {
             id: player.id,
             name: player.name,
             score: player.score + 10
           })
         }
         return player
       })
     })
     case INCREMENT_QUESTION:
        return {...state, currentQuestion: action.payload
          }
    default:
      return state;
  }
}