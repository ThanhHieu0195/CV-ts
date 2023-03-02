import React from "react";
type SpaceType = {
  variant?: "base" | "section";
};

const HSpace = ({ variant = "base" }: SpaceType) => {
  let spaceClassName;
  switch (variant) {
    case "section":
      spaceClassName = "h-6";
      break;
    default:
      spaceClassName = "h-2";
  }

  return (
    <div>
      <div className={spaceClassName}></div>
    </div>
  );
};

export default HSpace;
