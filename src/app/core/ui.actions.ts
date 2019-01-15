import {Action} from '@ngrx/store';

export enum UiActionTypes {
  START_LOADING = '[Ui] START LOADING',
  STOP_LOADING = '[Ui] STOP LOADING',
}

export class StartLoading implements Action {
  readonly type = UiActionTypes.START_LOADING;
}

export class StopLoading implements Action {
  readonly type = UiActionTypes.STOP_LOADING;
}

export type UiActions = StartLoading | StopLoading;
