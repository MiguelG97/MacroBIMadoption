/*
  Warnings:

  - A unique constraint covering the columns `[questionId,userId]` on the table `Answers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Answers_questionId_userId_key" ON "Answers"("questionId", "userId");
