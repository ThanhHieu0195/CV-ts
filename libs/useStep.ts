import { useRouter } from "next/router";
import { AppStep, useAppStep } from "./context/AppContext";

const useStep = () => {
  const { setStep, step } = useAppStep();
  const isEditStep = Boolean(step === AppStep.EDIT);
  const isPreviewStep = !isEditStep;
  const router = useRouter();

  const nextStep = () => {
    if (isEditStep) {
      setStep(AppStep.PREVIEW);
    } else {
      setStep(AppStep.EDIT);
    }
  };

  const gotoPreviewPrintPage = () => {
    return router.push(`/profiles/${router.query.userId}/preview`);
  };
  return {
    step,
    nextStep,
    isPreviewStep,
    isEditStep,
    gotoPreviewPrintPage,
  };
};

export default useStep;
