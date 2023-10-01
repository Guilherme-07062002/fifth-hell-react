import { initialState } from "./state";
import {
  ActionTypes,
  SetLoadingAction,
  SetRollDicesAction,
  SetCurrentStageAction,
  AdvanceStageAction,
  SetDiceValueAction,
} from "./actions";

export function appReducer(
  state = initialState,
  action:
    | SetLoadingAction
    | SetRollDicesAction
    | SetCurrentStageAction
    | AdvanceStageAction
    | SetDiceValueAction
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
    default:
      return state;
  }
}
