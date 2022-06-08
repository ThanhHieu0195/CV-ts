import React from "react";
import { IconType } from "../../libs/constants";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
import { GiMedallist, GiTargetShot } from "react-icons/gi";

export type IconProps = {
  type: IconType;
  onClick?: () => void;
};

const Icon = ({ type, onClick }: IconProps) => {
  switch (type) {
    case IconType.MAIL:
      return <AiOutlineMail onClick={onClick} />;
    case IconType.ADDRESS:
      return <FaAddressBook onClick={onClick} />;
    case IconType.PHONE:
      return <AiOutlinePhone onClick={onClick} />;
    case IconType.BIRTHDAY:
      return <FaBirthdayCake onClick={onClick} />;
    case IconType.OBJECTIVE:
      return <GiTargetShot onClick={onClick} />;
    case IconType.WORK_EXPERIENCE:
      return <GiMedallist onClick={onClick} />;
    case IconType.LIST:
      return <AiOutlineUnorderedList />;
    default:
      return <></>;
  }
};

export default Icon;
