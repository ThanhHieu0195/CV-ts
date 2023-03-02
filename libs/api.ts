import { IUser } from "@/libs/models/User";
import * as fs from "fs";
import * as path from "path";
import { User } from "./models/User.type";

const DIRNAME_DATA: string = path.resolve(
  process.env.PWD ?? "",
  "libs",
  "data"
);

export type UserResultType = {
  id: string;
  data: User;
};

class Api {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getUser(userId: string): Promise<User> {
    return JSON.parse(
      fs.readFileSync(path.resolve(DIRNAME_DATA, userId + ".json"), "utf-8")
    );
  }

  async getUsers(): Promise<UserResultType[]> {
    const list = fs.readdirSync(DIRNAME_DATA);
    const data: UserResultType[] = [];

    for (const item of list) {
      const userId: string = item.replace(/\.json/, "");
      data.push({
        id: userId,
        data: await this.getUser(userId),
      });
    }
    return data;
  }
}

export default new Api("/");
