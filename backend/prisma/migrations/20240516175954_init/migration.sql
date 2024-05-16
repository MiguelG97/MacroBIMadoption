-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "Assessment" TEXT NOT NULL,
    "Campaign" TEXT NOT NULL,
    "Item_ID" TEXT NOT NULL,
    "Item_Title" TEXT NOT NULL,
    "Item_Type" TEXT NOT NULL,
    "Statement_Labels" TEXT NOT NULL,
    "User_Email" TEXT NOT NULL,
    "User_ID" TEXT NOT NULL,
    "User_Name" TEXT NOT NULL,
    "Verification_Status" TEXT NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);
