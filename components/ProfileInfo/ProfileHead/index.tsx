import InputField from "@/components/InputField";
import { IUser } from "@/libs/models/User";
import React from "react";
import { useTheme } from "../../../libs/theme";
type HeaderProps = {
  user: IUser;
  onUpdateUserInfo?: (fieldName: string) => (value: string) => void;
};

const ProfileHead: React.VFC<HeaderProps> = ({
  user,
  onUpdateUserInfo,
}: HeaderProps) => {
  const theme = useTheme();
  return (
    <div>
      {user && (
        <div className={"p-5 text-right " + theme.primary.bg}>
          <h1 className={"text-3xl font-bold " + theme.color}>
            <InputField
              value={user.name}
              onInputChange={onUpdateUserInfo("name")}
            />
          </h1>
          {user?.position && (
            <h2 className={theme.color + " text-lg"}>
              {
                <InputField
                  value={user.position}
                  onInputChange={onUpdateUserInfo("position")}
                />
              }
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileHead;
