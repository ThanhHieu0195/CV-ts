import { useState } from "react";

export enum FormStep {
  PREVIEW,
  EDIT,
}

const useStep = () => {
  const [step, setStep] = useState<FormStep>(FormStep.PREVIEW);
  const nextStep = () => {
    if (step === FormStep.PREVIEW) setStep(FormStep.EDIT);
    else setStep(FormStep.PREVIEW);
  };
  return {
    step,
    nextStep,
    isPreviewStep: step === FormStep.PREVIEW,
    isEditStep: step === FormStep.EDIT,
  };
};

export default useStep;
