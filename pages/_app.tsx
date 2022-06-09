import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { useState } from "react";
import { useTheme } from "@/libs/theme";
import "@/styles/globals.css";
import { AppContext, AppStep } from "@/libs/context/AppContext";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  const [step, setStep] = useState<AppStep>(AppStep.PREVIEW);
  return (
    <div className="w-full pt-2 pb-20 text-white bg-[#e3e3e3] flex items-center justify-center font-normal">
      <div
        className={theme.color + " rounded-2xl overflow-hidden drop-shadow-md "}
      >
        <AppContext.Provider value={{ step, setStep }}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open%20Sans"
      />
    </div>
  );
}

export default App;
