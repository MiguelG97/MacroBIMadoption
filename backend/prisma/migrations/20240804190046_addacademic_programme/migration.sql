/*
  Warnings:

  - You are about to drop the column `bimAcademicProgram` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "bimAcademicProgram",
ADD COLUMN     "academicProgramme" TEXT[];
