/*
  Warnings:

  - Added the required column `cidade` to the `hospedagens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hospedagens" ADD COLUMN     "cidade" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "estacionamentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "phone_numbers" TEXT[],

    CONSTRAINT "estacionamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiosques" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "phone_numbers" TEXT[],

    CONSTRAINT "quiosques_pkey" PRIMARY KEY ("id")
);
