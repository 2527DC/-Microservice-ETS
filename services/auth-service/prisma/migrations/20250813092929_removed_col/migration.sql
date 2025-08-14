/*
  Warnings:

  - You are about to drop the column `salt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."User_salt_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "salt";
