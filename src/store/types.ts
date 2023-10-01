export interface AppData {
  isLoading: boolean;
  rollDices: boolean;
  currentStage: number;
  diceValue: number | null;
  started: boolean;
  stages: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface RootStateType {
  app: AppData;
}
