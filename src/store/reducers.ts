import { initialState } from "./state";
import {
  ActionTypes,
  SetLoadingAction,
  SetRollDicesAction,
  SetCurrentStageAction,
} from "./actions";

export function appReducer(
  state = initialState,
  action: SetLoadingAction | SetRollDicesAction | SetCurrentStageAction
) {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SET_ROLL_DICES:
      return { ...state, rollDices: action.payload };
    case ActionTypes.SET_CURRENT_STAGE:
      return { ...state, currentStage: action.payload };
    default:
      return state;
  }
}
