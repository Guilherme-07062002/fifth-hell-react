import { configureStore, createSlice } from "@reduxjs/toolkit";
import { stagesData } from "./stages";

export const initialState = {
  isLoading: false,
  rollDices: false,
  currentStage: 0,
  diceValue: null,
  started: false,
  stages: stagesData,
  collapseDialogBox: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setRollDices: (state, action) => {
      return {
        ...state,
        rollDices: action.payload,
      };
    },
    setCurrentStage: (state, action) => {
      return {
        ...state,
        currentStage: action.payload,
      };
    },
    advanceStage: (state) => {
      if (state.currentStage < state.stages.length - 1) {
        return {
          ...state,
          currentStage: state.currentStage + 1,
        };
      } else {
        return state;
      }
    },
    setDiceValue: (state, action) => {
      return {
        ...state,
        diceValue: action.payload,
      };
    },
    setStarted: (state, action) => {
      return {
        ...state,
        started: action.payload,
      };
    },
    collapseDialogBox: (state) => {
      return {
        ...state,
        collapseDialogBox: !state.collapseDialogBox,
      };
    }
  },
});

export const { setData } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
