import React from "react";
import { IconType } from "../../libs/constants";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
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
      return <FaBirthdayCake />;
    default:
      return <>EMPTY</>;
  }
};

export default Icon;
