-- CreateEnum
CREATE TYPE "Chart" AS ENUM ('bar', 'pie', 'table', 'undefined');

-- CreateTable
CREATE TABLE "Questionnaries" (
    "questionId" INTEGER NOT NULL,
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
    "userAnswer" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "assigAuditor" TEXT,
    "auditorNote" TEXT,
    "hashtags" TEXT,
    "stateLabels" TEXT,
    "questionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "userId" INTEGER NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userLabels" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "bimAcademicProgram" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Questionnaries_questionId_key" ON "Questionnaries"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questionnaries"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
