export enum ActionTypes {
  SET_LOADING = "app/setLoading",
  SET_ROLL_DICES = "app/setRollDices",
  SET_CURRENT_STAGE = "app/setCurrentStage",
  ADVANCE_STAGE = "app/advanceStage",
  SET_DICE_VALUE = "app/setDiceValue",
  SET_STARTED = "app/setStarted",
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

export interface SetDiceValueAction {
  type: ActionTypes.SET_DICE_VALUE;
  payload: number;
}

export interface SetStartedAction {
  type: ActionTypes.SET_STARTED;
  payload: boolean;
}

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: ActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setRollDices = (rollDices: boolean): SetRollDicesAction => ({
  type: ActionTypes.SET_ROLL_DICES,
  payload: rollDices,
});

export const setCurrentStage = (
  currentStage: number
): SetCurrentStageAction => ({
  type: ActionTypes.SET_CURRENT_STAGE,
  payload: currentStage,
});

export const advanceStage = (): AdvanceStageAction => ({
  type: ActionTypes.ADVANCE_STAGE,
});

export const setDiceValue = (diceValue: number | null): SetDiceValueAction => ({
  type: ActionTypes.SET_DICE_VALUE,
  payload: diceValue as number,
});

export const setStarted = (started: boolean): SetStartedAction => ({
  type: ActionTypes.SET_STARTED,
  payload: started,
});
