/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "priority",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "type" "TaskPriority" NOT NULL DEFAULT 'LOW';
