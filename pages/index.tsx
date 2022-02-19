import React from "react";
import Detail from "../components/Detail";
import Summary from "../components/Summary";
import { useTheme } from "../libs/theme";

const Index = () => {
  const theme = useTheme();
  return (
    <div className="flex">
      <div className={`w-2/3 ${theme.detail.bg}`}>
        <Detail />
      </div>
      <div className={`w-1/3 ${theme.summary.bg}`}>
        <Summary />
      </div>
    </div>
  );
};

export default Index;
