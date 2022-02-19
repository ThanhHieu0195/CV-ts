import React from "react";
import { useTheme } from "../../../libs/theme";
import { useUser } from "../../../libs/user";
type HeaderProps = {};

const Header: React.VFC<HeaderProps> = ({}) => {
  const { user } = useUser();
  const theme = useTheme();
  return (
    <div className={"p-5 text-right " + theme.primary.bg}>
      <h1 className={"text-3xl font-bold " + theme.color}>{user?.name}</h1>
      <h2 className={theme.color + " text-lg"}>{user?.position}</h2>
    </div>
  );
};

export default Header;
