import { User } from '../../user';
import { All, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}
export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export function reducer  (state: State = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      const stateObj: State =  {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
        },
        errorMessage: null,
      };
      return stateObj;
    }
    case AuthActionTypes.LOGIN_FAILURE: {
        const stateObj: State ={
            ...state,
            errorMessage: 'Incorrect email and/or password.'
        }
      return stateObj;
    }
    default: {
      return state;
    }
  }
}
