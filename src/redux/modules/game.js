import { setRoom } from './room';
import { setMove } from './move';
import { setMoves } from './moves';
import { setModelCache } from './modelCache';

const initialState = {
  gameId: null,
  party: [],
};

const GAME_SET_GAME = 'dungeoncrawler/GAME_SET_GAME';

export function setGame(gameId, party) {
  return {
    type: GAME_SET_GAME,
    payload: { gameId, party: party.slice() },
  };
}

const reducer = {
  [GAME_SET_GAME]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};

export function createGame(history) {
  return () => fetch(`${CONFIG.api.baseUrl}/game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      const err = new Error(response.statusText);
      throw err;
    })
    .then(response => response.json())
    .then(response => history.push(`/game/${encodeURIComponent(response.gameId)}`))
    .catch((err) => {
      console.error(err);

      // TODO create error redux module and push error to it
      // return history.push('/error');
    });
}

export function fetchGame(gameId, history) { // eslint-disable-line no-unused-vars
  return (dispatch, getState) => {
    const state = getState();

    if (state.game.gameId) return Promise.resolve();

    return fetch(`${CONFIG.api.baseUrl}/game/${gameId}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const err = new Error(response.statusText);
        throw err;
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(setGame(response.game.gameId, response.game.party));
        dispatch(setRoom(response.game.room));
        dispatch(setMoves(response.moves));
        dispatch(setModelCache(response.cache));

        const currentMove = response.moves.sort((a, b) => {
          if (a.turn < b.turn) return 1;
          if (a.turn > b.turn) return -1;

          throw new Error('duplicate turn detected');
        })[0];

        dispatch(setMove(currentMove));
      })
      .catch((err) => {
        console.error(err);

        // return history.push('/error');
      });
  };
}
