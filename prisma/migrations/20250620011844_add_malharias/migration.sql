-- CreateTable
CREATE TABLE "malharias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "phone_numbers" TEXT[],

    CONSTRAINT "malharias_pkey" PRIMARY KEY ("id")
);
