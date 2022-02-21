import { IUser } from "@/libs/models/User";
import React from "react";
import Avt from "../Avt";
import BasicInfo from "../BasicInfo";
import MetaInfo from "../MetaInfo";

type SummaryProps = {
  user: IUser;
};

const Summary = ({ user }: SummaryProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Avt src={user?.avt} />
      <BasicInfo data={user?.basicInfos} />
      <MetaInfo data={user?.metaInfos} />
    </div>
  );
};

export default Summary;
