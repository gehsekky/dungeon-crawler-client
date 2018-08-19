const initialState = [];

const MOVES_ADD_MOVE = 'dungeoncrawler/MOVES_ADD_MOVE';
const MOVES_SET_MOVES = 'dungeoncrawler/MOVES_SET_MOVES';

export function setMoves(moves) {
  return {
    type: MOVES_SET_MOVES,
    payload: moves,
  };
}

export function addMove(move) {
  return {
    type: MOVES_ADD_MOVE,
    payload: move,
  };
}

const reducer = {
  [MOVES_ADD_MOVE]: (state, payload) => {
    state.splice(0, 0, payload);
    return state.slice();
  },
  [MOVES_SET_MOVES]: (state, payload) => payload.slice(),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};
