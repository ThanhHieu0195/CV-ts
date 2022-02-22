import React, { useMemo, useState } from "react";
import _ from "lodash";
import api from "@/libs/api";
import router, { useRouter } from "next/router";
import ProfileInfo from "@/components/ProfileInfo";
import useStep from "@/libs/useStep";
import { FaArrowLeft, FaEdit, FaPrint, FaSave } from "react-icons/fa";
import DefaultLayout from "@/components/Layouts/Default";
import { IUser } from "@/libs/models/User";
import logger from "@/libs/logger";

type ProfileActionProps = {
  isPreviewStep: boolean;
  isEditStep: boolean;
  nextStep: () => void;
  onSubmitEditForm: () => void;
};

const ProfileAction = ({
  isPreviewStep,
  nextStep,
  isEditStep,
  onSubmitEditForm,
}: ProfileActionProps) => {
  const gotoPreviewPage = () => router.push(`${router.query.userId}/preview`);
  return (
    <div className="p-2">
      {isPreviewStep && (
        <>
          <button
            className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
            onClick={nextStep}
          >
            <FaEdit />
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-lg mr-2"
            onClick={gotoPreviewPage}
          >
            <FaPrint />
          </button>
        </>
      )}

      {isEditStep && (
        <>
          <button
            className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
            onClick={onSubmitEditForm}
          >
            <FaSave />
          </button>
          <button
            className="px-5 py-3 bg-yellow-400 rounded-lg mr-2"
            onClick={() => nextStep()}
          >
            <FaArrowLeft />
          </button>
        </>
      )}
    </div>
  );
};

const ProfileDetail = ({ user }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { isEditStep, isPreviewStep, nextStep } = useStep();

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
      <ProfileAction
        isEditStep={isEditStep}
        isPreviewStep={isPreviewStep}
        nextStep={nextStep}
        onSubmitEditForm={handleSubmitEditForm}
      />
      <DefaultLayout>
        <ProfileInfo
          data={data}
          isEditStep={isEditStep}
          onUpdateUserInfo={handleUpdateUserInfo}
        />
      </DefaultLayout>
    </div>
  );
};

export default ProfileDetail;
