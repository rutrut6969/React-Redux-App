import { combineReducers } from 'redux';
import { spellsReducer as spells } from './spellsReducer';
import { classesReducer as classes } from './classesReducer';
import { raceReducer as races } from './raceReducer';

export default combineReducers({
  spells,
  classes,
  races,
});
