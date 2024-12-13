import React from "react";
import { IBasicInfo } from "../../../libs/models/User";
import { IconType } from "../../../libs/constants";
import { useTheme } from "../../../libs/theme";
import DisplayField, { InputFieldType } from "../../InputField";
import { ThemeType } from "@/libs/types/theme.type";

type ItemProps = {
  text: string;
  icon: IconType;
  theme: ThemeType;
};

const BasicInfoItem = ({ text, icon, theme }: ItemProps) => {
  return (
    <div className="flex items-center py-2">
      <div
        className={`rounded-full p-2 mr-2 text-xl ${theme.summary.basicInfo.icon.bg} ${theme.summary.basicInfo.icon.border}`}
      >
        <DisplayField type={InputFieldType.ICON_FIELD} value={icon} />
      </div>
      <span className={"text-base " + theme.textColorIcon}>
        <DisplayField value={text} />
      </span>
    </div>
  );
};

export default BasicInfoItem;

