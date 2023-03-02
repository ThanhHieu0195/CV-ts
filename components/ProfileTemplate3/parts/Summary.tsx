import Avt from "@/components/Common/Avt";
import RowItem from "@/components/Common/RowIconItem";
import HSpace from "@/components/Common/Space";
import DisplayField from "@/components/InputField";
import { User } from "@/libs/models/User.type";
import { ThemeType } from "@/libs/types/theme.type";
import React from "react";

type SummaryProps = {
  user: User;
  theme: ThemeType;
};

const Summary = ({ user, theme }: SummaryProps) => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Avt src={user?.avt} variant="rect" />

      <HSpace variant="section" />

      <div className={`px-5`}>
        <DisplayField variant="heading" value={"Profile".toUpperCase()} />
        <HSpace />
        <div className="flex flex-col gap-1">
          {user?.basicInfos?.map(({ text, icon }, idx) => (
            <RowItem
              key={idx}
              text={text}
              icon={icon}
              theme={theme}
              filled={true}
            />
          ))}
        </div>

        <HSpace variant="section" />

        <div className={`w-full`}>
          {user?.metaInfos?.map((item, idx) => (
            <>
              <DisplayField
                variant="heading"
                value={item.heading.toUpperCase()}
              />
              <HSpace variant="base" />

              <div key={idx} className="mb-2  flex flex-col gap-1">
                {item.infos.map((item2, idx) => (
                  <RowItem key={idx} text={item2} theme={theme} />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
