import React from "react";
import ProfileTemplate1 from "@/components/ProfileTemplate1";
import ProfileTemplate2 from "@/components/ProfileTemplate2";
import { getUser } from "@/libs/context/UserContext";

const ProfileIndex = ({ user }) => {
  return (
    <div className="relative">
      {user?.version === "1" && <ProfileTemplate1 user={user} />}
      {user?.version === "2" && <ProfileTemplate2 user={user} />}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "tran-cao-thanh-hieu" } },
      { params: { userId: "tran-cao-thanh-hieu-02" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { userId } = params;
  const user = await getUser(userId as string);
  return { props: { user } };
}

export default ProfileIndex;
