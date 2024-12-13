import { IconType } from "@/libs/constants";
import React from "react";
import Icon from "../Icon";

export enum InputFieldType {
  TEXT_FIELD,
  AREA_FIELD,
  ICON_FIELD,
  LINK_FIELD,
}

type InputFieldProps = {
  value: string | IconType;
  type?: InputFieldType;
  onInputChange?: (value: string) => void;
  variant?:
    | "main-heading"
    | "heading"
    | "sub-heading"
    | "item"
    | "text"
    | "small";
  extraClass?: string;
  isFontBold?: boolean;
  link?: string;
  filled?: boolean;
};

const DisplayField = ({
  value,
  link,
  type = InputFieldType.TEXT_FIELD,
  variant,
  extraClass,
  isFontBold = false,
  filled,
}: InputFieldProps) => {
  const isTextField = type === InputFieldType.TEXT_FIELD;
  const isAreaField = type === InputFieldType.AREA_FIELD;
  const isIconField = type === InputFieldType.ICON_FIELD;
  const isLink = type === InputFieldType.LINK_FIELD;

  let className = "";

  if (variant && variant === "main-heading") {
    className += "text-3xl font-bold";
  }

  if (variant && variant === "heading") {
    className += "text-xl font-bold";
  }

  if (variant && variant === "sub-heading") {
    className += "text-md font-bold";
  }

  if (variant && variant === "item") {
    className += "text-sm";
  }

  if (variant && variant === "text") {
    className += "text-base";
  }

  if (variant && variant === "small") {
    className += "text-xs";
  }

  if (isFontBold) {
    className += " font-bold";
  }

  if (isLink) {
    className += " text-blue-600";
  }
  return (
    <div className={`${className} ${extraClass}`}>
      {(isTextField || isAreaField) && (
        <span dangerouslySetInnerHTML={{ __html: value }}></span>
      )}
      {isIconField && <Icon type={value as IconType} filled={filled} />}
      {isLink && <a href={link ?? value}>{value}</a>}
    </div>
  );
};

export default DisplayField;

