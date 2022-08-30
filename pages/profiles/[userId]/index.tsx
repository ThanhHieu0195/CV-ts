import React from "react";
import ProfileTemplate1 from "@/components/ProfileTemplate1";
import ProfileTemplate2 from "@/components/ProfileTemplate2";
import api from "@/libs/api";
const ProfileIndex = ({ user }) => {
  return (
    <>
      {user?.version === "1" && <ProfileTemplate1 user={user} />}
      {user?.version === "2" && <ProfileTemplate2 user={user} />}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "pham-thi-hai-hieu" } },
      { params: { userId: "tran-cao-thanh-hieu-01" } },
      { params: { userId: "tran-cao-thanh-hieu-02" } },
      { params: { userId: "tran-cao-thanh-hieu-03" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { userId } = params;
  const user = await api.getUser(userId as string);
  return { props: { user } };
}

export default ProfileIndex;
