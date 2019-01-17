import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  authenticated: boolean;
}

export const initialState: State = {
  authenticated: false,
};

export function reducer(state = initialState, action: AuthActions): State {
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

export const isAuthenticated = (state: State) => state.authenticated;
