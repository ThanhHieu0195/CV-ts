import React from "react";
import { IconType } from "@/libs/constants";
import { ThemeType } from "@/libs/types/theme.type";
import DisplayField, { InputFieldType } from "../InputField";
import { useTheme } from "@/libs/theme";

interface Props {
  icon?: IconType;
  heading: string;
  theme?: ThemeType;
}

const Heading = ({ icon, heading, theme }: Props) => {
  if (!theme) {
    theme = useTheme();
  }
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
        <div className={"text-xl font-bold " + theme.textColorSecondary}>
          <DisplayField value={heading} />
        </div>
      </div>
    </div>
  );
};

export default Heading;

