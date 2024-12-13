import React, { useState } from "react";
import { IconType, IconTypeList } from "@/libs/constants";
import Icon, { IconProps } from ".";

const IconList = ({
  type,
  onSelectItem,
  theme,
}: IconProps & { onSelectItem: (icon: IconType) => void }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Icon
        type={IconTypeList.find((i) => i === type)}
        onClick={() => setChecked(!checked)}
        theme={theme}
      />
      <div className="flex flex-col justify-center absolute top-10 bg-white z-10 rounded-sm">
        <input
          id="menu-list"
          className="menu-list hidden"
          type="checkbox"
          checked={checked}
        />
        <ul
          className={
            "block-menu-content  " + (theme.textColorIcon ?? "text-black")
          }
        >
          {IconTypeList.map((icon: IconType, idx) => (
            <li
              key={idx}
              className="p-2 hover:text-blue-400"
              onClick={() => onSelectItem(icon)}
            >
              <Icon type={icon} theme={theme} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconList;

