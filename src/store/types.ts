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
    continue?: string;
    rollDice?: boolean;
    theEnd?: boolean;
  }[];
  collapseDialogBox: boolean;
}

export interface RootStateType {
  app: AppData;
}
