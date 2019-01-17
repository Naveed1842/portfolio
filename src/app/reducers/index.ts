import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromUi from '../core/ui.reducer';
import * as fromAuth from '../core/auth.reducer';

export interface State {
  ui: fromUi.UILoaderState;
  auth: fromAuth.AuthState;
}


export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
  auth: fromAuth.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export const uiState = createFeatureSelector<fromUi.UILoaderState>('ui');
export const authState = createFeatureSelector<fromAuth.AuthState>('auth');


export const isLoading = createSelector(uiState, fromUi.isLoading);
export const isAuthenticated = createSelector(authState, fromAuth.isAuthenticated);
