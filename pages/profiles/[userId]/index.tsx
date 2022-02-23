import React, { useMemo, useState } from "react";
import _ from "lodash";
import api from "@/libs/api";
import { useRouter } from "next/router";
import ProfileInfo from "@/components/ProfileInfo";
import useStep from "@/libs/useStep";
import DefaultLayout from "@/components/Layouts/Default";
import { IUser } from "@/libs/models/User";
import logger from "@/libs/logger";
import ProfileAction from "@/components/ProfileInfo/ProfileAction";

const ProfileDetail = ({ user }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { nextStep } = useStep();

  useMemo(() => {
    setData(user);
  }, [user]);

  const handleUpdateUserInfo = (fieldName: string) => (value: string) => {
    setData((currentResult: IUser) => {
      if (value) {
        logger.info(`updating user-info ${fieldName} ${value}`);
        _.set(currentResult, fieldName, value);
      } else {
        logger.info(`removing user-info ${fieldName}`);
        _.remove(currentResult, fieldName);
      }
      return { ...currentResult };
    });
  };

  const handleSubmitEditForm = async (): Promise<void> => {
    return api
      .updateUser(router?.query?.userId as string, data)
      .then((rs) => {
        nextStep();
        return rs;
      })
      .catch((error) => {
        logger.error(error);
      });
  };

  return (
    <div className="relative">
      <ProfileAction onSubmitEditForm={handleSubmitEditForm} />
      <DefaultLayout>
        <ProfileInfo data={data} onUpdateUserInfo={handleUpdateUserInfo} />
      </DefaultLayout>
    </div>
  );
};

export default ProfileDetail;
