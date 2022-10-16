/*
  Warnings:

  - A unique constraint covering the columns `[federalResgistryNumber]` on the table `Pony` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `federalResgistryNumber` to the `Pony` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pony` ADD COLUMN `federalResgistryNumber` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pony_federalResgistryNumber_key` ON `Pony`(`federalResgistryNumber`);
