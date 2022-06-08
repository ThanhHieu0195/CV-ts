import { IUser } from "@/libs/models/User";
class Api {
  constructor() {}
  async getUser(userId: string): Promise<IUser> {
    return fetch(`/data/${userId}.json`).then((r) => r.json());
  }

  async getUsers(): Promise<string[]> {
    return fetch(`/data/list.json`).then((r) => r.json());
  }
}

export default new Api();
