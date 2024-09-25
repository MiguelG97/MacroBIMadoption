-- CreateEnum
CREATE TYPE "Chart" AS ENUM ('bar', 'pie', 'table', 'undefined');

-- CreateTable
CREATE TABLE "Questionnaires" (
    "questionId" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,
    "choices" TEXT[],
    "chartType" "Chart" NOT NULL DEFAULT 'undefined',
    "campaign" TEXT NOT NULL DEFAULT '',
    "sectionName" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "questionTitle" TEXT NOT NULL,
    "userAnswer" TEXT,
    "userEmail" TEXT NOT NULL,
    "assigAuditor" TEXT,
    "auditorNote" TEXT,
    "hashtags" TEXT,
    "stateLabels" TEXT,
    "verifStatus" TEXT,
    "questionId" DOUBLE PRECISION NOT NULL,
    "userId" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "userId" DOUBLE PRECISION NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userLabels" TEXT,
    "country" TEXT NOT NULL,
    "academicProgramme" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Questionnaires_questionId_key" ON "Questionnaires"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "Answers_questionId_userId_key" ON "Answers"("questionId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questionnaires"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
