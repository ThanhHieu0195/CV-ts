import React from "react";
import { IconType } from "../../libs/constants";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
import { GiMedallist, GiTargetShot } from "react-icons/gi";

type IconProps = {
  type: IconType;
};

const Icon = ({ type }: IconProps) => {
  switch (type) {
    case IconType.MAIL:
      return <AiOutlineMail />;
    case IconType.ADDRESS:
      return <FaAddressBook />;
    case IconType.PHONE:
      return <AiOutlinePhone />;
    case IconType.BIRTHDAY:
      return <FaBirthdayCake />;
    case IconType.OBJECTIVE:
      return <GiTargetShot />;
    case IconType.WORK_EXPERIENCE:
      return <GiMedallist />;
    default:
      return <>EMPTY</>;
  }
};

export default Icon;
