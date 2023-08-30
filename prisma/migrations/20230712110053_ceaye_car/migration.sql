-- CreateTable
CREATE TABLE "cars" (
    "id" UUID NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "prise" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
