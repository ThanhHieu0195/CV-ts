import React from "react";

const Avt = ({ src }) => {
  return (
    <div className="p-10">
      <img className="rounded-full w-[200px]" src={src} />
    </div>
  );
};

export default Avt;
