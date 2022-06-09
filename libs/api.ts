import { IUser } from "@/libs/models/User";
class Api {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  async getUser(userId: string): Promise<IUser> {
    return fetch(`${this.url}/data/${userId}.json`).then((r) => r.json());
  }

  async getUsers(): Promise<string[]> {
    return fetch(`${this.url}/data/list.json`).then((r) => r.json());
  }
}

export default new Api("http://localhost:3000");
