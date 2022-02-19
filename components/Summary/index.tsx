import React from "react";
import { useUser } from "../../libs/user";
import Avt from "../Avt";
import BasicInfo from "../BasicInfo";
import MetaInfo from "../MetaInfo";

const Summary = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-center items-center flex-col">
      <Avt src={user?.avt} />
      <BasicInfo data={user?.basicInfos} />
      <MetaInfo data={user?.metaInfos} />
    </div>
  );
};

export default Summary;
