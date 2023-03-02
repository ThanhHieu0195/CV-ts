import { ThemeType } from "@/libs/types/theme.type";
import React from "react";
import { IconType } from "../../../libs/constants";
import DisplayField, { InputFieldType } from "../../InputField";
import HSpace from "../Space";

type RowItemProps = {
  text: string;
  icon?: IconType;
  theme: ThemeType;
  filled?: boolean;
};

const RowItem = ({ text, icon, theme, filled }: RowItemProps) => {
  return (
    <>
      <div className="flex items-center">
        {icon && (
          <div
            className={`rounded-full mr-2 text-xl ${theme.summary.basicInfo.icon.bg} ${theme.summary.basicInfo.icon.border} ${theme.summary.basicInfo.icon.color}`}
          >
            <DisplayField
              type={InputFieldType.ICON_FIELD}
              value={icon}
              filled={filled}
            />
          </div>
        )}
        <DisplayField variant="item" value={text} />
      </div>
      <HSpace />
    </>
  );
};

export default RowItem;
