import React from "react";
import { IBasicInfo } from "../../../libs/models/User";
import { IconType } from "../../../libs/constants";
import { useTheme } from "../../../libs/theme";
import InputField, { InputFieldType } from "../../InputField";

type ItemProps = {
  text: string;
  icon: IconType;
};

const BasicInfoItem = ({ text, icon }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="flex items-center py-2">
      <div
        className={`rounded-full p-2 mr-2 text-xl ${theme.summary.basicInfo.icon.bg} ${theme.summary.basicInfo.icon.border}`}
      >
        <InputField type={InputFieldType.ICON_FIELD} value={icon} />
      </div>
      <span className="text-base">
        <InputField value={text} />
      </span>
    </div>
  );
};

export default BasicInfoItem;
