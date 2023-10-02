import { initialState } from "./state";
import {
  ActionTypes,
  SetLoadingAction,
  SetRollDicesAction,
  SetCurrentStageAction,
  AdvanceStageAction,
  SetDiceValueAction,
  SetStartedAction,
  CollapseDialogBoxAction,
} from "./actions";

export function appReducer(
  state = initialState,
  action:
    | SetLoadingAction
    | SetRollDicesAction
    | SetCurrentStageAction
    | AdvanceStageAction
    | SetDiceValueAction
    | SetStartedAction
    | CollapseDialogBoxAction
) {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SET_ROLL_DICES:
      return { ...state, rollDices: action.payload };
    case ActionTypes.SET_CURRENT_STAGE:
      return { ...state, currentStage: action.payload };
    case ActionTypes.ADVANCE_STAGE:
      return { ...state, currentStage: state.currentStage + 1 };
    case ActionTypes.SET_DICE_VALUE:
      return { ...state, diceValue: action.payload };
    case ActionTypes.SET_STARTED:
      return { ...state, started: action.payload };
    case ActionTypes.COLLAPSE_DIALOG_BOX:
      return { ...state, collapseDialogBox: !state.collapseDialogBox };
    default:
      return state;
  }
}
