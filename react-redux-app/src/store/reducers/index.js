import { combineReducers } from 'redux';
import { spellsReducer as spells } from './spellsReducer';
import { classesReducer as classes } from './classesReducer';

export default combineReducers({
  spells,
  classes,
});
