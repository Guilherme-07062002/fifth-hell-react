export interface AppData {
  isLoading: boolean;
  rollDices: boolean;
  currentStage: number;
  stages: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface RootStateType {
  app: AppData;
}
