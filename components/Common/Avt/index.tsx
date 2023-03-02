import React from "react";

type AvtType = {
  src: string;
  variant: "rect" | "circle";
};
const Avt = ({ src, variant = "circle" }: AvtType) => {
  let imgClass = "rounded-full w-[200px] border-green-400 border-4 p-1";

  if (variant === "rect") {
    imgClass = "rounded w-full";
  }
  return (
    <div className="p-2 w-full">
      <img className={imgClass} src={src} />
    </div>
  );
};

export default Avt;
