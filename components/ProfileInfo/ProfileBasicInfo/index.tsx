import React from "react";
import { IBasicInfo } from "../../../libs/models/User";
import { IconType } from "../../../libs/constants";
import Icon from "../../Icon";
import { useTheme } from "../../../libs/theme";
import InputField, { InputFieldType } from "../../InputField";

type ItemProps = {
  text: string;
  icon: IconType;
  onItemChange: (value) => void;
  isEdit: boolean;
};

const Item = ({ text, icon, isEdit, onItemChange }: ItemProps) => {
  const theme = useTheme();
  const handleTextChange = (val: string) => {
    onItemChange({ icon, text: val });
  };

  const handleIconChange = (val: string) => {
    onItemChange({ icon: val, text });
  };
  return (
    <div className="flex items-center py-2">
      <div
        className={`rounded-full p-2 mr-2 text-xl ${theme.summary.basicInfo.icon.bg} ${theme.summary.basicInfo.icon.border}`}
      >
        <InputField
          type={InputFieldType.ICON_FIELD}
          value={icon}
          edit={isEdit}
          onInputChange={handleIconChange}
        />
      </div>
      <span className="text-base">
        <InputField
          edit={isEdit}
          value={text}
          onInputChange={handleTextChange}
        />
      </span>
    </div>
  );
};

export type FuncUpdateBasicInfo = (
  idx: number
) => (value: Record<string, string>) => void;

type BasicInfoProps = {
  data: IBasicInfo[];
  isEdit: boolean;
  onUpdateBasicInfo: FuncUpdateBasicInfo;
};

const ProfileBasicInfo = ({
  data,
  isEdit,
  onUpdateBasicInfo,
}: BasicInfoProps) => {
  const theme = useTheme();
  const handleItemChange = (idx: number) => (value: Record<string, string>) => {
    onUpdateBasicInfo(idx)(value);
  };

  return (
    <div className={`w-full p-5 ${theme.summary.basicInfo.bg}`}>
      {data?.map(({ text, icon }, idx) => (
        <Item
          key={idx}
          text={text}
          icon={icon}
          isEdit={isEdit}
          onItemChange={handleItemChange(idx)}
        />
      ))}
    </div>
  );
};

export default ProfileBasicInfo;
