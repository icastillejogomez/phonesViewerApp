import { combineReducers } from 'redux';
import { mobileReducer } from './mobiles';

export const rootReducer = combineReducers({
  mobiles: mobileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;