-- CreateTable
CREATE TABLE "calendario" (
    "id" SERIAL NOT NULL,
    "imagem" TEXT,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "calendario_pkey" PRIMARY KEY ("id")
);
