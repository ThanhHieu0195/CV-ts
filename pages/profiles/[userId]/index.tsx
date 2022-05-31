import React, { useMemo, useState } from "react";
import ProfileInfo from "@/components/ProfileInfo";
import DefaultLayout from "@/components/Layouts/Default";

const ProfileDetail = ({ user }) => {
  const [data, setData] = useState(null);

  useMemo(() => {
    setData(user);
  }, [user]);

  return (
    <div className="relative">
      <DefaultLayout>
        <ProfileInfo data={data} />
      </DefaultLayout>
    </div>
  );
};

export default ProfileDetail;
