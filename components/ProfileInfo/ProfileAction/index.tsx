import React from "react";
import {
  ShouldEditComponent,
  ShouldPreviewComponent,
} from "@/libs/CommonComponent";
import useStep from "@/libs/useStep";
import { FaArrowLeft, FaEdit, FaPrint, FaSave } from "react-icons/fa";
type ProfileActionProps = {
  onSubmitEditForm: () => void;
};

const ProfileAction = ({ onSubmitEditForm }: ProfileActionProps) => {
  const { nextStep, gotoPreviewPrintPage } = useStep();
  return (
    <div className="p-2">
      <ShouldPreviewComponent>
        <>
          <button
            className="px-5 py-3 bg-blue-400 rounded-lg mr-2"
            onClick={nextStep}
          >
            <FaEdit />
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-lg mr-2"
            onClick={gotoPreviewPrintPage}
          >
            <FaPrint />
          </button>
        </>
      </ShouldPreviewComponent>

      <ShouldEditComponent>
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
      </ShouldEditComponent>
    </div>
  );
};
export default ProfileAction;
