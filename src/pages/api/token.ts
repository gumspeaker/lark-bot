// import { get } from "@vercel/edge-config";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  challenge?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const body = req.body;
    // const greeting = await get("greeting");
    res.status(200).json({ message: "success", challenge: body.challenge });
  } catch (error) {
    res.status(200).json({ message: "failed" });
  }
}
