import React from "react";
import { useTheme } from "../../../libs/theme";
import { IMetaInfo } from "../../../libs/models/User";
import InputField from "@/components/InputField";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { ShouldEditComponent } from "@/libs/CommonComponent";

type ItemProps = {
  data: IMetaInfo;
  onUpdateMetaInfo: (fieldName: string) => (val: string | unknown) => void;
};

const Item = ({ data, onUpdateMetaInfo }: ItemProps) => {
  const theme = useTheme();
  const handleRemoveItem = (idx: number) => () => {
    data.infos.splice(idx, 1);
    onUpdateMetaInfo(`infos`)(data.infos);
  };
  const handleAddItem = () => {
    onUpdateMetaInfo(`infos.${data.infos.length}`)("New item ...");
  };
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center pb-2">
        <h3
          className={`text-lg font-bold ${theme.summary.MetaInfo.heading} pr-2`}
        >
          <InputField
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
            <li key={idx} className="pb-5 text-base flex justify-center">
              <InputField
                value={text}
                onInputChange={(value: string) =>
                  onUpdateMetaInfo(`infos.${idx}`)(value)
                }
              />
              <ShouldEditComponent>
                <button
                  className="ml-2 hover:text-red-800"
                  onClick={handleRemoveItem(idx)}
                >
                  <MdRemoveCircleOutline />
                </button>
              </ShouldEditComponent>
            </li>
          ))}
        </ul>
        <ShouldEditComponent>
          <div className="my-2">
            <button
              className="text-md py-1 px-2 hover:text-blue-800 hover:border-blue-800 border border-gray-600"
              onClick={handleAddItem}
            >
              Add
            </button>
          </div>
        </ShouldEditComponent>
      </div>
    </div>
  );
};

export type FuncUpdateMetaInfo = (
  idx: number
) => (fieldName: string | null) => (val: string | unknown) => void;

type MetaInfoProps = {
  data: IMetaInfo[];
  onUpdateMetaInfo: FuncUpdateMetaInfo;
};

const MetaInfo = ({ data, onUpdateMetaInfo }: MetaInfoProps) => {
  const handleRemoveItem = (idx: number) => () => {
    data.splice(idx, 1);
    onUpdateMetaInfo(null)(null)(data);
  };

  const handleAddItem = () => {
    data.push({
      heading: "Heading",
      infos: [],
    });
    onUpdateMetaInfo(null)(null)(data);
  };
  return (
    <div className={`w-full p-5 `}>
      {data?.map((item, idx) => (
        <div key={idx} className="mb-2 flex justify-center items-center">
          <ShouldEditComponent>
            <button
              className="absolute right-0 text-3xl ml-2 hover:text-red-500 hover:font-bold"
              onClick={handleRemoveItem(idx)}
            >
              <MdRemoveCircleOutline />
            </button>
          </ShouldEditComponent>
          <Item data={item} onUpdateMetaInfo={onUpdateMetaInfo(idx)} />
        </div>
      ))}

      <ShouldEditComponent>
        <button
          className="absolute right-0 text-3xl ml-2 hover:text-red-500 hover:font-bold"
          onClick={handleAddItem}
        >
          <MdAddCircleOutline />
        </button>
      </ShouldEditComponent>
    </div>
  );
};

export default MetaInfo;
