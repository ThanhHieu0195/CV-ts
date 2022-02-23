import { createContext, useContext, useState } from "react";
import api from "@/libs/api";
import { IUser } from "@/libs/models/User";

export const UserContext = createContext(null);

export const getUser = (userId: string) => {
  return api.getUser(userId);
};

export const useUser = (): { user: IUser } => {
  const data = useContext(UserContext);
  const [user, setUser] = useState(data);
  return { user };
};
