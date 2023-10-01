export enum ActionTypes {
  SET_LOADING = "app/setLoading",
  SET_ROLL_DICES = "app/setRollDices",
  SET_CURRENT_STAGE = "app/setCurrentStage",
  ADVANCE_STAGE = "app/advanceStage",
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: boolean;
}

export interface SetRollDicesAction {
  type: ActionTypes.SET_ROLL_DICES;
  payload: boolean;
}

export interface SetCurrentStageAction {
  type: ActionTypes.SET_CURRENT_STAGE;
  payload: number;
}

export interface AdvanceStageAction {
  type: ActionTypes.ADVANCE_STAGE;
}
