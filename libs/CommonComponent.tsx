import React from "react";
import useStep from "./useStep";

export const ShouldEditComponent = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { isEditStep } = useStep();
  return <>{isEditStep && children}</>;
};

export const ShouldPreviewComponent = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { isPreviewStep } = useStep();

  return <>{isPreviewStep && children}</>;
};
