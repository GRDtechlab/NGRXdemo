import { Action, createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failer',
}

export const LOGIN = 'Auth Login';
export const LOGIN_SUCCESS = 'Auth Successfull';
export const LOGIN_Failure = 'Auth Failure';

export const Login = createAction(
  LOGIN, 
  props<{payload: any}>()
);
export const LoginSuccess = createAction(
LOGIN_SUCCESS, 
  props<{payload: any}>()
);

export const LoginFailure = createAction(
  LOGIN_Failure, 
  props<{payload: any}>()
);

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}
export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}
export type All = LogIn | LogInSuccess | LogInFailure;
