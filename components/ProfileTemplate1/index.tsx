import React from "react";
import DefaultLayout from "@/components/Layouts/Default";
import Experience from "@/components/ProfileTemplate1/ProfileDetail2";
import { useTheme } from "@/libs/theme";
import DispalyField from "@/components/InputField";
import Avt from "../Avt";
import BasicInfoItem from "./BasicInfoItem";
import MetaInfoItem from "./MetaInfoItem";
import ProfileDetailItem from "@/components/ProfileTemplate1/ProfileDetail";

const ProfileTemplate1 = ({ user }) => {
  const theme = useTheme();
  return (
    <div className="relative">
      <DefaultLayout>
        <div className="mt-10">
          <div className={"p-5 text-right " + theme.primary.bg}>
            <h1 className={"text-3xl font-bold " + theme.color}>
              <DispalyField value={user?.name} />
            </h1>
            {user?.position && (
              <h2 className={theme.color + " text-lg"}>
                {<DispalyField value={user?.position} />}
              </h2>
            )}
          </div>
          <div className="flex">
            <div className={`w-2/3 ${theme.detail.bg}`}>
              <div className="pt-8 px-8">
                {user?.detail?.map((detail, idx) => (
                  <ProfileDetailItem key={idx} data={detail} />
                ))}
              </div>
              {user.experience && <Experience detail={user.experience} />}
            </div>
            <div className={`w-1/3 ${theme.summary.bg}`}>
              <div className="flex justify-center items-center flex-col">
                <Avt src={user?.avt} />
                <div className={`w-full p-5 ${theme.summary.basicInfo.bg}`}>
                  {user?.basicInfos?.map(({ text, icon }, idx) => (
                    <div key={idx} className="flex">
                      <BasicInfoItem text={text} icon={icon} />
                    </div>
                  ))}
                </div>
                <div className={`w-full p-5 `}>
                  {user?.metaInfos?.map((item, idx) => (
                    <div key={idx} className="mb-2 flex items-center">
                      <MetaInfoItem data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ProfileTemplate1;
