import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const items = fs
    .readdirSync("data")
    .filter((item) => item.match(/\.json$/))
    .map((item) => item.replace(".json", ""));
  res.json(items);
}
