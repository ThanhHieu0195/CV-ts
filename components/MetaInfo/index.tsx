import React from "react";
import { useTheme } from "../../libs/theme";
import { IMetaInfo } from "../../libs/models/User";

type ItemProps = {
  data: IMetaInfo;
};

const Item = ({ data }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center pb-2">
        <h3
          className={`text-lg font-bold ${theme.summary.MetaInfo.heading} pr-2`}
        >
          {data.heading}
        </h3>
        <span
          className={`w-full h-[1px] ${theme.summary.MetaInfo.line.bg}`}
        ></span>
      </div>
      <div className="px-10">
        <ul className="list-disc">
          {data.infos.map((text) => (
            <li className="pb-5 text-base" key={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type MetaInfoProps = {
  data: IMetaInfo[];
};

const MetaInfo = ({ data }: MetaInfoProps) => {
  const theme = useTheme();
  return (
    <div className={`w-full p-5 `}>
      {data?.map((item, idx) => (
        <Item key={idx} data={item} />
      ))}
    </div>
  );
};

export default MetaInfo;
