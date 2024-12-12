import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import DisplayField, { InputFieldType } from "../../InputField";
import logger from "@/libs/logger";
import { IconType } from "@/libs/constants";

type ItemType = {
  icon: IconType;
  heading: string;
  data: {
    subheading: string;
    time: string;
    projects: {
      name: string | null;
      metas: {
        title: string;
        display?: "list" | "string" | "link";
        value: string | string[];
      }[];
    }[];
  }[];
};
type ItemProps = {
  data: ItemType;
};

const Item = ({ data }: ItemProps) => {
  const theme = useTheme();

  const Item = ({ item }) => {
    switch (item.display) {
      case "list":
        return item.value?.map((text, idx) => (
          <div key={idx} className="text-base pl-2 pb-2">
            {text}
          </div>
        ));

      case "string":
        return (
          <div className="text-base pl-2 pb-2">{item.value.join(", ")}</div>
        );

      case "link":
        return item.value?.map((text, idx) => (
          <div key={idx} className="text-base pl-2 pb-2 text-blue-500">
            <a href={text}>{text}</a>
          </div>
        ));
      default:
        return <></>;
    }
  };

  return (
    <div className="pb-10">
      <div className="flex items-center pb-2">
        {data.icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <DisplayField type={InputFieldType.ICON_FIELD} value={data.icon} />
          </div>
        )}
        {data.heading && (
          <div className={"text-xl font-bold " + theme.color2}>
            <DisplayField value={data.heading} />
          </div>
        )}
      </div>
      <div className="pl-4">
        {data.data.map((subItem, index) => (
          <>
            <div key={index} className="pb-4 pl-8 border-l-4 border-green-600">
              <div className="flex items-center justify-between pb-2">
                <div className="text-xl font-bold">
                  <DisplayField value={subItem.subheading} />
                </div>
                <div className="text-xs">
                  <DisplayField value={subItem.time} />
                </div>
              </div>
              <ul className="pl-4 w-4/5 list-disc">
                {subItem?.projects?.map((project, idx) => (
                  <li key={idx}>
                    <div className="text-md font-bold">{project.name}</div>
                    <div className="p-2 text-gray-800">
                      {project.metas?.map((item, idx) => (
                        <div key={idx}>
                          {item.title && (
                            <div className="text-md font-bold">
                              {item.title}
                            </div>
                          )}

                          {typeof item.value === "string" && (
                            <div className="text-base pl-2 pb-2 whitespace-pre-line">
                              {item.value}
                            </div>
                          )}

                          {typeof item.value === "object" && (
                            <Item item={item} />
                          )}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {index < data.data.length - 1 && (
              <div className="w-full border-b-2 border-green-600 border-dotted pt-2 mb-4"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const Experience = ({ detail }) => {
  return (
    <div className="px-8">
      <Item data={detail} />
    </div>
  );
};

export default Experience;

