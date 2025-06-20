-- CreateTable
CREATE TABLE "restaurantes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "phone_numbers" TEXT[],

    CONSTRAINT "restaurantes_pkey" PRIMARY KEY ("id")
);
