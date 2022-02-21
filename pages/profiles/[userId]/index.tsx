import React, { useMemo, useState } from "react";
import Detail from "@/components/Detail";
import Summary from "@/components/Summary";
import { useTheme } from "@/libs/theme";
import _ from "lodash";
import api from "@/libs/api";
import { useRouter } from "next/router";

enum FormStep {
  PREVIEW,
  EDIT,
  PRINT,
}

const ProfileDetail = ({ user }) => {
  const theme = useTheme();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [formStep, setFormStep] = useState<FormStep>(FormStep.PREVIEW);
  const [saving, setSaving] = useState(false);
  useMemo(() => {
    setData(user);
  }, [user]);

  const handleUserInfoUpdate = (fieldName: string) => (e) => {
    setData((currentResult) => {
      _.set(currentResult, fieldName, e.target.value);
      return { ...currentResult };
    });
  };

  const handleSaveUserInfo = () => {
    setSaving(true);
    api
      .updateUser(router?.query?.userId as string, data)
      .then((rs) => {
        setSaving(false);
        setFormStep(FormStep.PREVIEW);
        return rs;
      })
      .catch((error) => {
        setSaving(false);
        console.error(error);
      });
  };

  const handleResetUserInfo = () => {
    console.info("reset user info", user);
    setData((currentResult) => ({ ...currentResult, ...user }));
  };

  return (
    <div>
      {!saving && (
        <div className="relative">
          {formStep !== FormStep.PRINT && (
            <div className="fixed top-0 left-0 right-0 p-2">
              {formStep === FormStep.PREVIEW && (
                <>
                  <button
                    className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
                    onClick={() => setFormStep(FormStep.EDIT)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
                    onClick={handleResetUserInfo}
                  >
                    Revert
                  </button>
                  <button
                    className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
                    onClick={() => setFormStep(FormStep.PRINT)}
                  >
                    Print
                  </button>
                </>
              )}

              {formStep === FormStep.EDIT && (
                <>
                  <button
                    className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
                    onClick={handleSaveUserInfo}
                  >
                    Update
                  </button>
                </>
              )}
            </div>
          )}
          <div className="flex">
            <div className={`w-2/3 ${theme.detail.bg}`}>
              <Detail
                user={data}
                isEdit={formStep === FormStep.EDIT}
                onUserInfoUpdate={handleUserInfoUpdate}
              />
            </div>
            <div className={`w-1/3 ${theme.summary.bg}`}>
              <Summary user={data} />
            </div>
          </div>
        </div>
      )}

      {saving && (
        <div className="bg-gray-400 h-screen flex items-center justify-center">
          Saving ...
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
