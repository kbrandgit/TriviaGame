import { GAME_STATE, INCREMENT_SCORE, INCREMENT_QUESTION, ADD_CPU, ADD_PLAYER } from "../actions";

export default function(state = '', action) {
  switch (action.type) {
    case GAME_STATE:
      return !state ? action.payload : {...state}
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
      
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, 
          {id: state.players.length+1,
          name: action.payload,
          score: 0}]
      }
    
    case ADD_CPU:
      return {
        ...state,
        players: [...state.players, 
          {id: state.players.length+1,
          name: "CPU "+ state.players.length,
          score:0}]
      }

    default:
      return state;
  }
}