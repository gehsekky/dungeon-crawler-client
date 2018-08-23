import { combineReducers } from 'redux';
import game from './game';
import modelCache from './modelCache';
import moves from './moves';
import move from './move';
import room from './room';

export default combineReducers({
  game,
  modelCache,
  moves,
  move,
  room,
});
