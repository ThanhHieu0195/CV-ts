import React from "react";
const DefaultLayout = ({ children }) => {
  return (
    <div className="max-w-[1024px] pt-5 pb-5">
      <div className="rounded-md shadow-md">{children}</div>
    </div>
  );
};
export default DefaultLayout;
