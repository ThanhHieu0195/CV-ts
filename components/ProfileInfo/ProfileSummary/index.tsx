import React from "react";
import { IUser } from "@/libs/models/User";
import Avt from "@/components/Avt";
import ProfileBasicInfo, {
  FuncUpdateBasicInfo,
} from "@/components/ProfileInfo/ProfileBasicInfo";
import MetaInfo, {
  FuncUpdateMetaInfo,
} from "@/components/ProfileInfo/ProfileMetaInfo";
import InputField from "@/components/InputField";
import _ from "lodash";
import {
  ShouldEditComponent,
  ShouldPreviewComponent,
} from "@/libs/CommonComponent";

type ProfileSummaryProps = {
  user: IUser;
};

const ProfileSummary = ({ user }: ProfileSummaryProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Avt src={user?.avt} />
      <ProfileBasicInfo data={user?.basicInfos} />
      <MetaInfo data={user?.metaInfos} />
    </div>
  );
};

export default ProfileSummary;
