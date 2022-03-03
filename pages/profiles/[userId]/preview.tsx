import React, { useMemo, useState } from "react";
import ProfileInfo from "@/components/ProfileInfo";
import DefaultLayout from "@/components/Layouts/Default";
import ProfileAction from "@/components/ProfileInfo/ProfileAction";

const ProfileDetail = ({ user }) => {
  const [data, setData] = useState(null);

  useMemo(() => {
    setData(user);
  }, [user]);

  const func = (a) => (b) => {};
  return (
    <div className="relative">
      <DefaultLayout>
        <ProfileInfo data={data} onUpdateUserInfo={func} />
      </DefaultLayout>
    </div>
  );
};

export default ProfileDetail;
