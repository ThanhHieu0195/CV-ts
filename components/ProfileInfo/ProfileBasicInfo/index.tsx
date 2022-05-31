import React from "react";
import { IBasicInfo } from "../../../libs/models/User";
import { IconType } from "../../../libs/constants";
import { useTheme } from "../../../libs/theme";
import InputField, { InputFieldType } from "../../InputField";

type ItemProps = {
  text: string;
  icon: IconType;
};

const Item = ({ text, icon }: ItemProps) => {
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

export type FuncUpdateBasicInfo = (
  idx: number | null
) => (value: Record<string, string> | unknown) => void;

type BasicInfoProps = {
  data: IBasicInfo[];
};

const ProfileBasicInfo = ({ data }: BasicInfoProps) => {
  const theme = useTheme();

  return (
    <div className={`w-full p-5 ${theme.summary.basicInfo.bg}`}>
      {data?.map(({ text, icon }, idx) => (
        <div key={idx} className="flex">
          <Item text={text} icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default ProfileBasicInfo;
