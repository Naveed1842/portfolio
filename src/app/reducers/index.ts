import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromUi from '../core/ui.reducer';

export interface State {
  ui: fromUi.UILoaderState;
}


export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export const uiState = createFeatureSelector<fromUi.UILoaderState>('ui');
export const isLoading = createSelector(uiState, fromUi.isLoading);
