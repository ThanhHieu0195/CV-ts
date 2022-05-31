import { IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import React from "react";
import ProfileDetail from "./ProfileDetail";
import ProfileSummary from "./ProfileSummary";
import ProfileHead from "./ProfileHead";
import ProfileDetail2 from "./ProfileDetail2";

type ProfileProps = {
  data: IUser;
};

const ProfileInfo = ({ data }: ProfileProps) => {
  const theme = useTheme();
  return (
    <div className="mt-10">
      <ProfileHead user={data} />
      <div className="flex">
        <div className={`w-2/3 ${theme.detail.bg}`}>
          <ProfileDetail user={data} />
          <ProfileDetail2 />
        </div>
        <div className={`w-1/3 ${theme.summary.bg}`}>
          <ProfileSummary user={data} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
