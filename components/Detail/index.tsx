import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import Icon from "@/components/Icon";

enum InputFieldType {
  TEXT_FIELD,
  AREA,
}

type InputFieldProps = {
  value: string;
  edit: boolean;
  type?: InputFieldType;
  onDetailUpdate: (e) => void;
};

const InputField = ({
  value,
  onDetailUpdate,
  edit,
  type = InputFieldType.TEXT_FIELD,
}: InputFieldProps) => {
  return (
    <div>
      {edit && (
        <>
          {type === InputFieldType.TEXT_FIELD && (
            <input
              className="w-full p-2"
              value={value}
              onChange={onDetailUpdate}
            />
          )}

          {type === InputFieldType.AREA && (
            <textarea className="w-full p-2" rows={6} onChange={onDetailUpdate}>
              {value}
            </textarea>
          )}
        </>
      )}
      {!edit && <span>{value}</span>}
    </div>
  );
};

type ItemProps = {
  isEdit: boolean;
  data: IDetail;
  onDetailUpdate: (fieldName: string) => (e) => void;
};

const Item = ({ data, isEdit, onDetailUpdate }: ItemProps) => {
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
          <InputField
            value={data.heading}
            edit={isEdit}
            onDetailUpdate={onDetailUpdate("heading")}
          />
        </div>
      </div>
      <div className="pl-4">
        {data.description && (
          <div className="text-base">
            <InputField
              value={data.description}
              edit={isEdit}
              type={InputFieldType.AREA}
              onDetailUpdate={onDetailUpdate("description")}
            />
          </div>
        )}
        {data.detail?.map((detail, idxDetail) => (
          <div key={idxDetail}>
            <div className="text-lg font-bold pb-2">
              <InputField
                value={detail.heading}
                edit={isEdit}
                onDetailUpdate={onDetailUpdate(`detail.${idxDetail}.heading`)}
              />
            </div>
            <div className="pl-4">
              {detail?.data.map((subItem, idxSubItem) => (
                <div key={idxSubItem} className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-md font-bold">
                      <InputField
                        value={subItem.subheading}
                        edit={isEdit}
                        onDetailUpdate={onDetailUpdate(
                          `detail.${idxDetail}.data.${idxSubItem}.subheading`
                        )}
                      />
                    </div>
                    <div className="text-sm">
                      <InputField
                        value={subItem.time}
                        edit={isEdit}
                        onDetailUpdate={onDetailUpdate(
                          `detail.${idxDetail}.data.${idxSubItem}.time`
                        )}
                      />
                    </div>
                  </div>
                  <div className="pl-4 w-4/5">
                    <ul className="list-disc px-4">
                      {subItem.content.map((text, idxSubItemContent) => (
                        <li
                          key={idxSubItemContent}
                          className="px-2 py-1 text-base"
                        >
                          <InputField
                            value={text}
                            edit={isEdit}
                            onDetailUpdate={onDetailUpdate(
                              `detail.${idxDetail}.data.${idxSubItem}.content.${idxSubItemContent}`
                            )}
                          />
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

type DetailProps = {
  isEdit?: boolean;
  onUserInfoUpdate?: (fieldName: string) => (e) => void;
  user: IUser;
};

const Detail = ({ user, isEdit = false, onUserInfoUpdate }: DetailProps) => {
  const handleDetailUpdate =
    (idx: number) => (fieldName: string) => (e: any) => {
      onUserInfoUpdate(`detail.${idx}.${fieldName}`)(e);
    };
  return (
    <div className="p-8">
      {user?.detail?.map((detail, idx) => (
        <Item
          isEdit={isEdit}
          key={idx}
          data={detail}
          onDetailUpdate={handleDetailUpdate(idx)}
        />
      ))}
    </div>
  );
};

export default Detail;
