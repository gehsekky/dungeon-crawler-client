import { setRoom } from './room';
import { addMove } from './moves';

const initialState = {
  moveId: null,
  gameId: null,
  action: null,
  storyBase: null,
};

const MOVE_SET_MOVE = 'dungeoncrawler/MOVE_SET_MOVE';

export function setMove(move) {
  return {
    type: MOVE_SET_MOVE,
    payload: move,
  };
}

const reducer = {
  [MOVE_SET_MOVE]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};

export function createMove(move) {
  return dispatch => fetch(`${CONFIG.api.baseUrl}/move`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      gameId: move.gameId,
      action: move.action,
      turn: move.turn,
    }),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      const err = new Error(response.statusText);
      throw err;
    })
    .then(response => response.json())
    .then((response) => {
      dispatch(setRoom(response.move.room));
      dispatch(setMove(response.move));
      dispatch(addMove(response.move));
    })
    .catch((err) => {
      console.error(err);

      // TODO create error redux module and push error to it
      // return history.push('/error');
    });
}
