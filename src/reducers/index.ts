import { combineReducers } from 'redux';
import tournaments from './tournaments';

const rootReducer = combineReducers({
  tournaments
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
