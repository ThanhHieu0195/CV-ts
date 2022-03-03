import React from "react";

const Avt = ({ src }) => {
  return (
    <div className="p-10">
      <img
        className="rounded-full w-[200px] border-green-400 border-4 p-1"
        src={src}
      />
    </div>
  );
};

export default Avt;
