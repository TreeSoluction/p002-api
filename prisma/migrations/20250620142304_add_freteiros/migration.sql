-- CreateTable
CREATE TABLE "transportadoras" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "imagem" TEXT,
    "phone_numbers" TEXT[],

    CONSTRAINT "transportadoras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freteiros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "imagem" TEXT,
    "phone_numbers" TEXT[],

    CONSTRAINT "freteiros_pkey" PRIMARY KEY ("id")
);
