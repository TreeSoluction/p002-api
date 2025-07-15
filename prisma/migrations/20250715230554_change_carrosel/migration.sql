/*
  Warnings:

  - You are about to drop the column `imagens` on the `carrosel` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `carrosel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrosel" DROP COLUMN "imagens",
ADD COLUMN     "imagem" TEXT NOT NULL;
