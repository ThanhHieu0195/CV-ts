import { IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import React from "react";
import ProfileDetail from "./ProfileDetail";
import ProfileSummary from "./ProfileSummary";
import ProfileHead from "./ProfileHead";

type ProfileProps = {
  data: IUser;
  isEditStep: boolean;
  onUpdateUserInfo?: (fileName: string) => (value: string) => void;
};

const ProfileInfo = ({ data, isEditStep, onUpdateUserInfo }: ProfileProps) => {
  const theme = useTheme();
  return (
    <div>
      <ProfileHead
        user={data}
        isEdit={isEditStep}
        onUpdateUserInfo={onUpdateUserInfo}
      />
      <div className="flex">
        <div className={`w-2/3 ${theme.detail.bg}`}>
          <ProfileDetail
            user={data}
            isEdit={isEditStep}
            onUpdateUserInfo={onUpdateUserInfo}
          />
        </div>
        <div className={`w-1/3 ${theme.summary.bg}`}>
          <ProfileSummary
            user={data}
            isEdit={isEditStep}
            onUpdateUserInfo={onUpdateUserInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
