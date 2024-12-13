import React from "react";
import { IconType } from "../../libs/constants";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
import { GiMedallist, GiTargetShot } from "react-icons/gi";
import { ThemeType } from "@/libs/types/theme.type";

export type IconProps = {
  type: IconType;
  filled?: boolean;
  onClick?: () => void;
  theme: ThemeType;
};

const Icon = ({ type, onClick, filled = false, theme }: IconProps) => {
  switch (type) {
    case IconType.MAIL:
      if (filled) {
        return <AiFillMail onClick={onClick} />;
      }
      return <AiOutlineMail onClick={onClick} />;
    case IconType.ADDRESS:
      return <FaAddressBook onClick={onClick} />;
    case IconType.PHONE:
      if (filled) {
        return <AiFillPhone onClick={onClick} />;
      }
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

