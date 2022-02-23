import {
  ShouldEditComponent,
  ShouldPreviewComponent,
} from "@/libs/CommonComponent";
import { IconType } from "@/libs/constants";
import React from "react";
import Icon from "../Icon";
import IconList from "../Icon/IconList";

export enum InputFieldType {
  TEXT_FIELD,
  AREA_FIELD,
  ICON_FIELD,
}

type InputFieldProps = {
  value: string | IconType;
  type?: InputFieldType;
  onInputChange: (value: string) => void;
};

const InputField = ({
  value,
  onInputChange,
  type = InputFieldType.TEXT_FIELD,
}: InputFieldProps) => {
  const handleFieldChange = (e) => onInputChange(e.target.value);

  const handleSelectItem = (icon: IconType) => onInputChange(icon);

  const isTextField = type === InputFieldType.TEXT_FIELD;
  const isAreaField = type === InputFieldType.AREA_FIELD;
  const isIconField = type === InputFieldType.ICON_FIELD;

  return (
    <div>
      <ShouldEditComponent>
        <>
          {isTextField && (
            <input
              className="w-full p-2"
              value={value}
              onChange={handleFieldChange}
            />
          )}

          {isAreaField && (
            <textarea
              className="w-full p-2"
              rows={6}
              onChange={handleFieldChange}
              defaultValue={value}
            ></textarea>
          )}

          {isIconField && (
            <IconList
              type={value as IconType}
              onSelectItem={handleSelectItem}
            />
          )}
        </>
      </ShouldEditComponent>

      <ShouldPreviewComponent>
        <div>
          {(isTextField || isAreaField) && <span>{value}</span>}
          {isIconField && <Icon type={value as IconType} />}
        </div>
      </ShouldPreviewComponent>
    </div>
  );
};

export default InputField;
