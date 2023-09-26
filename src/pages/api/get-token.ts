// import { get } from "@vercel/edge-config";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = JSON.parse(req.body);
  // const greeting = await get("greeting");
  res.status(200).json({ message: "success", data: body.challenge });
}
