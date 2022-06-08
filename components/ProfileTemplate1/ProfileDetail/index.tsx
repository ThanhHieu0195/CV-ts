import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import DispalyField, { InputFieldType } from "../../InputField";
import Heading from "@/components/Heading";

type ItemProps = {
  data: IDetail;
};

const ProfileDetailItem = ({ data }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="pb-10">
      <div className="flex items-center pb-2">
        <Heading heading={data.heading} icon={data.icon} />
      </div>
      <div className="pl-4">
        {data.description && (
          <div className="text-base">
            <DispalyField
              value={data.description}
              type={InputFieldType.AREA_FIELD}
            />
          </div>
        )}
        {data.detail?.map((detail, idxDetail) => (
          <div key={idxDetail}>
            <div className="text-lg font-bold pb-2">
              <DispalyField value={detail.heading} />
            </div>
            <div className="pl-4">
              {detail?.data.map((subItem, idxSubItem) => (
                <div key={idxSubItem} className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-md font-bold">
                      <DispalyField value={subItem.subheading} />
                    </div>
                    <div className="text-sm">
                      <DispalyField value={subItem.time} />
                    </div>
                  </div>
                  <div className="pl-4 w-4/5">
                    <ul className="list-disc px-4">
                      {subItem.content.map((text, idxSubItemContent) => (
                        <li
                          key={idxSubItemContent}
                          className="px-2 py-1 text-base"
                        >
                          <DispalyField value={text} />
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

export default ProfileDetailItem;
