import { ThemeType } from "@/libs/types/theme.type";
import React from "react";

const Avt = ({ src, theme }: { src: string; theme: ThemeType }) => {
  return (
    <div
      className={
        "w-[200px] rounded-full border-2 overflow-hidden " + theme.bgBorder
      }
    >
      <img className={" p-1 rounded-full " + theme.primary.bg} src={src} />
    </div>
  );
};

export default Avt;

