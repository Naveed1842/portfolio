import {UiActions, UiActionTypes} from './ui.actions';

export interface UILoaderState {
  loading: boolean;
}

export const initialState: UILoaderState = {
  loading: false
};

export function reducer(state = initialState, action: UiActions): UILoaderState {
  switch (action.type) {
    case UiActionTypes.START_LOADING:
      return {
        loading: true
      };
    case UiActionTypes.STOP_LOADING:
      return {
        loading: false
      };
    default:
      return state;
  }
}

export const isLoading = (state: UILoaderState) => state.loading;
