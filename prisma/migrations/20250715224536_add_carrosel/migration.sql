-- CreateTable
CREATE TABLE "carrosel" (
    "id" SERIAL NOT NULL,
    "imagens" TEXT[],

    CONSTRAINT "carrosel_pkey" PRIMARY KEY ("id")
);
