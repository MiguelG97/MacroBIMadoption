-- AlterTable
ALTER TABLE "Answers" ALTER COLUMN "Assessment" DROP NOT NULL,
ALTER COLUMN "Campaign" DROP NOT NULL,
ALTER COLUMN "Item_ID" DROP NOT NULL,
ALTER COLUMN "Item_Title" DROP NOT NULL,
ALTER COLUMN "Item_Type" DROP NOT NULL,
ALTER COLUMN "Statement_Labels" DROP NOT NULL,
ALTER COLUMN "User_Email" DROP NOT NULL,
ALTER COLUMN "User_ID" DROP NOT NULL,
ALTER COLUMN "User_Name" DROP NOT NULL,
ALTER COLUMN "Verification_Status" DROP NOT NULL;
