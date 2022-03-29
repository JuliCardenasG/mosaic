// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MosaicTile, prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MosaicTile[]>
) {
  const prisma = new PrismaClient();

  const tiles = await prisma.mosaicTile.findMany({});
  res.status(200).json(tiles);
}
