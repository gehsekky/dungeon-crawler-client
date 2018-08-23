const initialState = {};

const MODELCACHE_SET_CACHE = 'dungeoncrawler/MODELCACHE_SET_CACHE';

export function setModelCache(modelCache) {
  return {
    type: MODELCACHE_SET_CACHE,
    payload: modelCache,
  };
}

const reducer = {
  [MODELCACHE_SET_CACHE]: (state, payload) => Object.assign({}, state, payload),
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};
