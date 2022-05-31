import InputField from "@/components/InputField";
import { IUser } from "@/libs/models/User";
import React from "react";
import { useTheme } from "../../../libs/theme";
type HeaderProps = {
  user: IUser;
};

const ProfileHead: React.VFC<HeaderProps> = ({ user }: HeaderProps) => {
  const theme = useTheme();
  return (
    <div>
      {user && (
        <div className={"p-5 text-right " + theme.primary.bg}>
          <h1 className={"text-3xl font-bold " + theme.color}>
            <InputField value={user.name} />
          </h1>
          {user?.position && (
            <h2 className={theme.color + " text-lg"}>
              {<InputField value={user.position} />}
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileHead;
