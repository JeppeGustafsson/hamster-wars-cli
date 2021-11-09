import { combineReducers } from 'redux';
import matches from './matches';
import hamsters from './hamsters';
import topWinners from './topWinners';
import topLosers from './topLosers';
import cutest from './cutsest';

export default combineReducers({
  matches,
  hamsters,
  topWinners,
  topLosers,
  cutest
})