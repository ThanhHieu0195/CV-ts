import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layouts/Header";
import { getUser, UserContext } from "@/libs/context/UserContext";
import { IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import "@/styles/globals.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const [user, setUser] = useState<IUser>(null);
  const router = useRouter();

  useEffect(() => {
    const { userId } = router.query;
    if (userId && !user)
      getUser(userId as string).then((user: IUser) => {
        setUser(user);
      });
  }, [router, user]);

  return (
    <div className="w-full pt-2 pb-20 text-white bg-[#e3e3e3] flex items-center justify-center font-normal">
      <div
        className={
          theme.color + " rounded-2xl overflow-hidden drop-shadow-md w-[1024px]"
        }
      >
        <UserContext.Provider value={user}>
          <Header user={user} />
          <Component {...pageProps} user={user} />
        </UserContext.Provider>
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open%20Sans"
      />
    </div>
  );
}

export default App;
