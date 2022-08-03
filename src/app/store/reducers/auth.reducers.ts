import { createReducer, on } from '@ngrx/store';
import { User } from '../../user';
import { All, AuthActionTypes, Login, LoginFailure, LoginSuccess, LOGIN_Failure, LOGIN_SUCCESS } from '../actions/auth.actions';

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

export const reducer = createReducer(
  initialState,
  on(LoginSuccess, (state:State, {payload}) => {
    console.log(state,payload);
    return {...state, isAuthenticated: true,
    user:{
      token: payload.token,
      email: payload.email
    }}
  }),
  on(LoginFailure, (state: State, {payload}) => {
    return {...state, errorMessage: 'Incorrect email and/or password.'}
  })
)

// export function reducer  (state: State = initialState, action: All): State {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       const stateObj: State =  {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email,
//         },
//         errorMessage: null,
//       };
//       return stateObj;
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//         const stateObj: State ={
//             ...state,
//             errorMessage: 'Incorrect email and/or password.'
//         }
//       return stateObj;
//     }
//     default: {
//       return state;
//     }
//   }
// }
