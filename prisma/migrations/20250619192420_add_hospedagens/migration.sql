-- CreateTable
CREATE TABLE "hospedagens" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "phone_numbers" TEXT[],

    CONSTRAINT "hospedagens_pkey" PRIMARY KEY ("id")
);
