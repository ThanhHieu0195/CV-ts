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
  onUpdateUserInfo?: (
    fieldName: string
  ) => (value: string | Record<string, string> | unknown) => void;
};

const ProfileSummary = ({ user, onUpdateUserInfo }: ProfileSummaryProps) => {
  const handleUpdateBasicInfo: FuncUpdateBasicInfo =
    (idx: number) => (val: unknown) => {
      if (_.isNil(idx)) {
        onUpdateUserInfo(`basicInfos`)(val);
        return;
      }
      onUpdateUserInfo(`basicInfos.${idx}`)(val);
    };

  const handleUpdateMetaInfo: FuncUpdateMetaInfo =
    (idx) => (fieldName: string) => (val: string) => {
      if (_.isNil(idx)) {
        onUpdateUserInfo(`metaInfos`)(val);
        return;
      }
      onUpdateUserInfo(`metaInfos.${idx}.${fieldName}`)(val);
    };

  const handleUpdateAvt = (val: string) => {
    onUpdateUserInfo(`avt`)(val);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <ShouldPreviewComponent>
        <Avt src={user?.avt} />
      </ShouldPreviewComponent>

      <ShouldEditComponent>
        <InputField value={user?.avt} onInputChange={handleUpdateAvt} />
      </ShouldEditComponent>

      <ProfileBasicInfo
        data={user?.basicInfos}
        onUpdateBasicInfo={handleUpdateBasicInfo}
      />
      <MetaInfo
        data={user?.metaInfos}
        onUpdateMetaInfo={handleUpdateMetaInfo}
      />
    </div>
  );
};

export default ProfileSummary;
