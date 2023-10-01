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

interface RootState {
  app: AppData;
}
