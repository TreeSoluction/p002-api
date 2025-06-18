-- CreateTable
CREATE TABLE "excursoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "rota" TEXT[],
    "phone_numbers" TEXT[],

    CONSTRAINT "excursoes_pkey" PRIMARY KEY ("id")
);
