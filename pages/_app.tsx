import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Header from "../components/Layouts/Header";
import { useTheme } from "../libs/theme";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <div className="w-full px-40 py-10 text-white bg-[#e3e3e3] font-['Quicksand']">
      <div
        className={theme.color + " rounded-2xl overflow-hidden drop-shadow-md"}
      >
        <Header />
        <Component {...pageProps} />
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Quicksand"
      />
    </div>
  );
}

export default App;
