import React from "react";
import { IBasicInfo } from "../../libs/models/User";
import { IconType } from "../../libs/constants";
import Icon from "../Icon";
import { useTheme } from "../../libs/theme";

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
        <Icon type={icon} />
      </div>
      <span className="text-base">{text}</span>
    </div>
  );
};

type BasicInfoProps = {
  data: IBasicInfo[];
};

const BasicInfo = ({ data }: BasicInfoProps) => {
  const theme = useTheme();
  return (
    <div className={`w-full p-5 ${theme.summary.basicInfo.bg}`}>
      {data?.map(({ text, icon }) => (
        <Item key={text} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default BasicInfo;
