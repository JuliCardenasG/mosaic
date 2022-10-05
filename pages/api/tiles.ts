// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MosaicTile, prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MosaicTile | MosaicTile[]>
) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const tiles = await prisma.mosaicTile.findMany({});
    res.status(200).json(tiles);
  } else if (req.method === 'POST') {
    const { x, y, color } = JSON.parse(req.body)
    const updatedTile = 
      await prisma.mosaicTile.update({
        data: { x, y, color },
        where: { x_y: {x, y } }
      })
    res.status(201).json(updatedTile)
  }
}
