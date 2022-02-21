import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId) throw new Error("Bad request");
  if (!fs.existsSync(`data/${userId}.json`))
    throw new Error("userId is not exists");

  if (req.method === "GET") {
    const data = JSON.parse(fs.readFileSync(`data/${userId}.json`, "utf-8"));
    return res.json(data);
  } else {
    const data = fs.readFileSync(`data/${userId}.json`, "utf-8");
    fs.writeFileSync(
      `data/versions/${userId}-${new Date().toISOString()}.json`,
      data
    );
    fs.writeFileSync(`data/${userId}.json`, req.body);
    return res.json({ ok: true });
  }
}
