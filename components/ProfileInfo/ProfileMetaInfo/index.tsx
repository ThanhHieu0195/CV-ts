import React from "react";
import { useTheme } from "../../../libs/theme";
import { IMetaInfo } from "../../../libs/models/User";
import InputField from "@/components/InputField";

type ItemProps = {
  data: IMetaInfo;
  onUpdateMetaInfo: (fieldName: string) => (val: string) => void;
  isEdit: boolean;
};

const Item = ({ data, onUpdateMetaInfo, isEdit }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center pb-2">
        <h3
          className={`text-lg font-bold ${theme.summary.MetaInfo.heading} pr-2`}
        >
          <InputField
            edit={isEdit}
            value={data.heading}
            onInputChange={(value: string) =>
              onUpdateMetaInfo("heading")(value)
            }
          />
        </h3>
        <span
          className={`w-full h-[1px] ${theme.summary.MetaInfo.line.bg}`}
        ></span>
      </div>
      <div className="px-10">
        <ul className="list-disc">
          {data.infos.map((text, idx) => (
            <li className="pb-5 text-base" key={idx}>
              <InputField
                edit={isEdit}
                value={text}
                onInputChange={(value: string) =>
                  onUpdateMetaInfo(`infos.${idx}`)(value)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export type FuncUpdateMetaInfo = (
  idx: number
) => (fieldName: string) => (val: string) => void;

type MetaInfoProps = {
  data: IMetaInfo[];
  isEdit: boolean;
  onUpdateMetaInfo: FuncUpdateMetaInfo;
};

const MetaInfo = ({ data, isEdit, onUpdateMetaInfo }: MetaInfoProps) => {
  return (
    <div className={`w-full p-5 `}>
      {data?.map((item, idx) => (
        <Item
          key={idx}
          data={item}
          isEdit={isEdit}
          onUpdateMetaInfo={onUpdateMetaInfo(idx)}
        />
      ))}
    </div>
  );
};

export default MetaInfo;
