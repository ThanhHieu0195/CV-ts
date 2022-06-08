import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { useEffect, useState } from "react";
import { getUser, UserContext } from "@/libs/context/UserContext";
import { IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AppContext, AppStep } from "@/libs/context/AppContext";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const [user, setUser] = useState<IUser>(null);
  const router = useRouter();

  useEffect(() => {
    const { userId } = router.query;
    if (userId && !user) {
      getUser(userId as string).then((user: IUser) => {
        setUser(user);
      });
    }
  }, [router, user]);

  const [step, setStep] = useState<AppStep>(AppStep.PREVIEW);
  return (
    <div className="w-full pt-2 pb-20 text-white bg-[#e3e3e3] flex items-center justify-center font-normal">
      <div
        className={theme.color + " rounded-2xl overflow-hidden drop-shadow-md "}
      >
        <AppContext.Provider value={{ step, setStep }}>
          <UserContext.Provider value={user}>
            <Component {...pageProps} user={user} />
          </UserContext.Provider>
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
