import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { useState } from "react";
import { useTheme } from "@/libs/theme";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <div className="w-full text-white bg-[#e3e3e3] flex items-center justify-center font-normal">
      <div className={theme.color + " overflow-hidden"}>
        <Component {...pageProps} />
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open%20Sans"
      />
      <script src="/script.js"></script>
    </div>
  );
}

export default App;
