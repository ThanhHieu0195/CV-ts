import React from "react";
import Profile from "@/components/Profile";

const ProfileIndex = ({ user }) => {
  return (
    <div className="relative">
      {user?.version === "1" && <Profile user={user} />}
    </div>
  );
};

export default ProfileIndex;
