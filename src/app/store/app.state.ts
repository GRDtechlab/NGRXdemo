import { combineReducers } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer,
};

// export const reducers = combineReducers({
//   auth: auth.reducer,
// });