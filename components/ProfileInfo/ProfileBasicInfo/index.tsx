import React from "react";
import { IBasicInfo } from "../../../libs/models/User";
import { IconType } from "../../../libs/constants";
import { useTheme } from "../../../libs/theme";
import InputField, { InputFieldType } from "../../InputField";
import { MdRemoveCircleOutline } from "react-icons/md";
import { ShouldEditComponent } from "@/libs/CommonComponent";

type ItemProps = {
  text: string;
  icon: IconType;
  onItemChange: (value) => void;
};

const Item = ({ text, icon, onItemChange }: ItemProps) => {
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
          onInputChange={handleIconChange}
        />
      </div>
      <span className="text-base">
        <InputField value={text} onInputChange={handleTextChange} />
      </span>
    </div>
  );
};

export type FuncUpdateBasicInfo = (
  idx: number | null
) => (value: Record<string, string> | unknown) => void;

type BasicInfoProps = {
  data: IBasicInfo[];
  onUpdateBasicInfo: FuncUpdateBasicInfo;
};

const ProfileBasicInfo = ({ data, onUpdateBasicInfo }: BasicInfoProps) => {
  const theme = useTheme();

  const handleItemChange = (idx: number) => (value: Record<string, string>) => {
    onUpdateBasicInfo(idx)(value);
  };

  const handleAddMore = () => {
    onUpdateBasicInfo(data.length)({
      icon: IconType.ADDRESS,
      text: "",
    });
  };

  const handleRemoveItem = (idx: number) => () => {
    data.splice(idx, 1);
    onUpdateBasicInfo(null)(data);
  };

  return (
    <div className={`w-full p-5 ${theme.summary.basicInfo.bg}`}>
      {data?.map(({ text, icon }, idx) => (
        <div key={idx} className="flex">
          <Item text={text} icon={icon} onItemChange={handleItemChange(idx)} />
          <ShouldEditComponent>
            <button
              className="ml-2 hover:text-red-800"
              onClick={handleRemoveItem(idx)}
            >
              <MdRemoveCircleOutline />
            </button>
          </ShouldEditComponent>
        </div>
      ))}
      <ShouldEditComponent>
        <div className="mt-2">
          <button
            className="text-md py-1 px-2 hover:text-blue-800 hover:border-blue-800 border border-gray-600"
            onClick={handleAddMore}
          >
            Add
          </button>
        </div>
      </ShouldEditComponent>
    </div>
  );
};

export default ProfileBasicInfo;
