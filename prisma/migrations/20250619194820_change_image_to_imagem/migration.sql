/*
  Warnings:

  - You are about to drop the column `image` on the `hospedagens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hospedagens" DROP COLUMN "image",
ADD COLUMN     "imagem" TEXT;
