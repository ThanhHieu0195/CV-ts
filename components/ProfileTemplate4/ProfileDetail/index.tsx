import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import DisplayField, { InputFieldType } from "../../InputField";

type ItemProps = {
  data: IDetail;
};

const ProfileDetailItem = ({ data }: ItemProps) => {
  const theme = useTheme();

  return (
    <div className="pb-10">
      <div className="flex items-center">
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
          <div className={"text-xl font-bold " + theme.textColorSecondary}>
            <DisplayField value={data.heading} />
          </div>
        )}
      </div>
      <div className="pl-4">
        {data.description && (
          <div className="text-base">
            <DisplayField
              value={data.description}
              type={InputFieldType.AREA_FIELD}
            />
          </div>
        )}
        {data.detail?.map((detail, idxDetail) => (
          <div key={idxDetail}>
            <div className="text-lg font-bold pb-2">
              <DisplayField value={detail.heading} />
            </div>
            <div className="pl-4">
              {detail?.data.map((subItem, idxSubItem) => (
                <div key={idxSubItem} className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-md font-bold">
                      <DisplayField value={subItem.subheading} />
                    </div>
                    <div className="text-sm">
                      <DisplayField value={subItem.time} />
                    </div>
                  </div>
                  <div className="pl-4 w-4/5">
                    <ul className="list-disc px-4">
                      {subItem.content.map((text, idxSubItemContent) => (
                        <li
                          key={idxSubItemContent}
                          className="px-2 py-1 text-base"
                        >
                          <DisplayField value={text} />
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

