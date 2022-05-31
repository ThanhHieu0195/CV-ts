import { IconType } from "@/libs/constants";
import React from "react";
import Icon from "../Icon";

export enum InputFieldType {
  TEXT_FIELD,
  AREA_FIELD,
  ICON_FIELD,
}

type InputFieldProps = {
  value: string | IconType;
  type?: InputFieldType;
  onInputChange?: (value: string) => void;
};

const InputField = ({
  value,
  type = InputFieldType.TEXT_FIELD,
}: InputFieldProps) => {
  const isTextField = type === InputFieldType.TEXT_FIELD;
  const isAreaField = type === InputFieldType.AREA_FIELD;
  const isIconField = type === InputFieldType.ICON_FIELD;

  return (
    <div>
      <div>
        {(isTextField || isAreaField) && <span>{value}</span>}
        {isIconField && <Icon type={value as IconType} />}
      </div>
    </div>
  );
};

export default InputField;
