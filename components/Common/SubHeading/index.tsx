import React from "react";
import DisplayField, { InputFieldType } from "@/components/InputField";
import { IconType } from "@/libs/constants";
import { ThemeType } from "@/libs/types/theme.type";

interface Props {
  icon?: IconType;
  heading: string;
  theme: ThemeType;
}

const SubHeading = ({ icon, heading, theme }: Props) => {
  return (
    <div>
      <div className="flex items-center pb-2">
        {icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <DisplayField type={InputFieldType.ICON_FIELD} value={icon} />
          </div>
        )}
        <div className={"text-xl font-bold " + theme.color}>
          <DisplayField value={heading} />
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
