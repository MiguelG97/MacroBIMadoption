-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_userId_fkey";

-- AlterTable
ALTER TABLE "Answers" ALTER COLUMN "questionId" SET DATA TYPE BIGINT,
ALTER COLUMN "userId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Questionnaries" ALTER COLUMN "questionId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "userId" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questionnaries"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
