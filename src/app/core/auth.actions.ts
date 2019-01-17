import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  AUTHENTICATED = '[Auth] Authenticated',
  UNAUTHENTICATED = '[Auth] UnAuthenticated'
}

export class SetAuthentication implements Action {
  readonly type = AuthActionTypes.AUTHENTICATED;
}

export class SetUnAuthentication implements Action {
  readonly type = AuthActionTypes.UNAUTHENTICATED;
}

export type AuthActions = SetAuthentication | SetUnAuthentication;
