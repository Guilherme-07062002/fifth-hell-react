import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  rollDices: false,
  currentStage: 0,
  stages: {
    0: {
      title: "Forest",
      description: "You are in the forest",
    },
    1: {
      title: "Forest Again",
      description: "You are in the forest again",
    },
  },
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
