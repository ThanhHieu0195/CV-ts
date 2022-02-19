import React from "react";
import { IDetail } from "../../libs/models/User";
import { useTheme } from "../../libs/theme";
import { useUser } from "../../libs/user";
import Icon from "../Icon";

type ItemProps = {
  data: IDetail;
};
const Item = ({ data }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="pb-10">
      <div className="flex items-center pb-2">
        {data.icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <Icon type={data.icon} />
          </div>
        )}
        <div className={"text-xl font-bold " + theme.color2}>
          {data.heading}
        </div>
      </div>
      <div className="pl-4">
        {data.description && <div className="text-lg">{data.description}</div>}
        {data.detail?.map((detail, idx) => (
          <div key={idx}>
            <div className="text-lg font-bold pb-2">{detail.heading}</div>
            <div className="pl-4">
              {detail?.data.map((subItem, idx) => (
                <div key={idx} className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-md font-bold">
                      {subItem.subheading}
                    </div>
                    <div className="text-sm">{subItem.time}</div>
                  </div>
                  <div className="pl-4 w-4/5">
                    <ul className="list-disc px-4">
                      {subItem.content.map((text, idx) => (
                        <li key={idx} className="px-2 py-1 text-base">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Detail = () => {
  const { user } = useUser();
  const theme = useTheme();
  return (
    <div className="p-8">
      {user?.detail?.map((detail) => (
        <Item data={detail} />
      ))}
    </div>
  );
};

export default Detail;
