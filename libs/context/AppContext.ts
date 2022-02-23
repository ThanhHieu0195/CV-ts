import { createContext, useContext } from "react";

export enum AppStep {
  PREVIEW,
  EDIT,
}

type AppState = {
  step: AppStep;
  setStep: (step: AppStep) => void;
};

export const AppContext = createContext<AppState>({
  step: AppStep.PREVIEW,
  setStep: () => {},
});

export const useAppStep = (): AppState => {
  return useContext<AppState>(AppContext);
};
