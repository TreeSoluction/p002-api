/*
  Warnings:

  - Added the required column `imagem` to the `estacionamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `malharias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `quiosques` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `restaurantes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "estacionamentos" ADD COLUMN     "imagem" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lojas" ADD COLUMN     "imagem" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "malharias" ADD COLUMN     "imagem" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "quiosques" ADD COLUMN     "imagem" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "restaurantes" ADD COLUMN     "imagem" TEXT NOT NULL;
