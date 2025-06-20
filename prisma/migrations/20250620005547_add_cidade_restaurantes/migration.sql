/*
  Warnings:

  - Added the required column `cidade` to the `restaurantes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurantes" ADD COLUMN     "cidade" TEXT NOT NULL;
