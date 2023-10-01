export interface AppData {
  isLoading: boolean;
  rollDices: boolean;
  currentStage: number;
  stages: {
    [key: number]: {
      title: string;
      description: string;
    };
  };
}

export interface RootState {
  app: AppData;
}
