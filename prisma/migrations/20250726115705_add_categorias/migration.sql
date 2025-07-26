-- AlterTable
ALTER TABLE "cidades" ADD COLUMN     "categorias" TEXT[];

-- CreateTable
CREATE TABLE "categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);
