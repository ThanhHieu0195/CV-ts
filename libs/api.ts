import { IUser } from "@/libs/models/User";
import * as fs from "fs";
import * as path from "path";

const DIRNAME_DATA = path.resolve(process.env.PWD, "libs", "data");
class Api {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getUser(userId: string): Promise<IUser> {
    return JSON.parse(
      fs.readFileSync(path.resolve(DIRNAME_DATA, userId + ".json"), "utf-8")
    );
  }

  async getUsers(): Promise<string[]> {
    const list = fs.readdirSync(DIRNAME_DATA);
    console.info("list", list);
    return list.map((item) => item.replace(/\.json/, ""));
  }
}

export default new Api("/");
