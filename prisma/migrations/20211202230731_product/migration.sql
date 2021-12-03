-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "typeHard" TEXT NOT NULL,
    "modelHard" TEXT NOT NULL,
    "priceHard" TEXT NOT NULL,
    "yearuseHard" INTEGER NOT NULL,
    "productPhotosHard" TEXT NOT NULL,
    "videoHard" TEXT NOT NULL,
    "usedHard" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
