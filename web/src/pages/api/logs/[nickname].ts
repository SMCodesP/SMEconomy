import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import data from "@/utils/data.json";

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const { nickname } = req.query;

  res.json(data.logs.filter((log) => log.playerFrom === nickname));
});

export default handler;
