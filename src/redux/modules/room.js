const initialState = {
  roomId: null,
  gameId: null,
  roomTypeId: null,
  location: null,
  type: null,
};

const ROOM_SET_ROOM = 'dungeoncrawler/ROOM_SET_ROOM';

export function setRoom(room) {
  return {
    type: ROOM_SET_ROOM,
    payload: room,
  };
}

const reducer = {
  [ROOM_SET_ROOM]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};
