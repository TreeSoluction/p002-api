/*
  Warnings:

  - You are about to drop the `cidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cidade";

-- CreateTable
CREATE TABLE "cidades" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "cidades_pkey" PRIMARY KEY ("id")
);
