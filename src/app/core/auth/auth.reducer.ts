import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
  authenticated: boolean;
}

export const initialState: AuthState = {
  authenticated: false,
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATED:
      return {
        authenticated: true
      };
    case AuthActionTypes.UNAUTHENTICATED:
      return {
        authenticated: false
      };
    default:
      return state;
  }
}

export const isAuthenticated = (state: AuthState) => state.authenticated;
