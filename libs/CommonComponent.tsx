import React from "react";

export const ShouldEditComponent = ({
  edit,
  children,
}: {
  edit: boolean;
  children: React.ReactElement;
}) => {
  return <>{edit && children}</>;
};
