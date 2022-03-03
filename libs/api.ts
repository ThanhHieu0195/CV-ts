import { IUser } from "@/libs/models/User";
class Api {
  url: string;
  constructor(url) {
    this.url = url;
  }

  async getUser(userId: string): Promise<IUser> {
    return fetch(`${this.url}/api/users/${userId}`).then((r) => r.json());
  }

  async updateUser(userId: string, data: IUser): Promise<void> {
    return fetch(`${this.url}/api/users/${userId}`, {
      method: "post",
      body: JSON.stringify(data),
    }).then((r) => r.json());
  }

  async getUsers(): Promise<string[]> {
    return fetch(`${this.url}/api/users/`).then((r) => r.json());
  }
}

export default new Api("https://karrot95.herokuapp.com");
