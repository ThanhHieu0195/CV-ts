import React from "react";
import ProfileTemplate1 from "@/components/ProfileTemplate1";
import ProfileTemplate2 from "@/components/ProfileTemplate2";

const ProfileIndex = ({ user }) => {
  return (
    <div className="relative">
      {user?.version === "1" && <ProfileTemplate1 user={user} />}
      {user?.version === "2" && <ProfileTemplate2 user={user} />}
    </div>
  );
};

export default ProfileIndex;
