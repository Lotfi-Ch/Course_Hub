/*
  Warnings:

  - Added the required column `body` to the `attachement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attachement" ADD COLUMN     "body" TEXT NOT NULL;
