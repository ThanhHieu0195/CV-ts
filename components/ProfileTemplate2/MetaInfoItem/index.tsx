import React from "react";
import { useTheme } from "../../../libs/theme";
import { IMetaInfo } from "../../../libs/models/User";
import DisplayField from "@/components/InputField";

type ItemProps = {
  data: IMetaInfo;
};

const MetaInfoItem = ({ data }: ItemProps) => {
  const theme = useTheme();
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center pb-2">
        <h3
          className={`text-lg font-bold ${theme.summary.MetaInfo.heading} pr-2`}
        >
          <DisplayField value={data.heading} />
        </h3>
        <span
          className={`w-full h-[1px] ${theme.summary.MetaInfo.line.bg}`}
        ></span>
      </div>
      <div className="px-5">
        <ul className="list-dict">
          {data.infos.map((text, idx) => (
            <li key={idx} className="pb-5 text-base">
              <DisplayField value={text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MetaInfoItem;
