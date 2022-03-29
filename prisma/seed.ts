import { MosaicTile, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const mosaicSize = 100;

  for (let x = 0; x < mosaicSize; x++) {
    for (let y = 0; y < mosaicSize; y++) {
      await prisma.mosaicTile.create({
        data: {
          x,
          y,
          color: Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0"),
        },
      });
    }
  }
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
