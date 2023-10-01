import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  rollDices: false,
  currentStage: 0,
  stages: [
    {
      title: "Forest",
      description: "You are in the forest",
      image: "/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png",
    },

    {
      title: "Forest Again",
      description: "You are in the forest again",
      image: "/src/pages/Scenario/components/Image/assets/imgs/ForestDark.png",
    },
  ],
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
