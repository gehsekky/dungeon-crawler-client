import { combineReducers } from 'redux';
import game from './game';
import moves from './moves';
import move from './move';
import room from './room';

export default combineReducers({
  game,
  moves,
  move,
  room,
});
