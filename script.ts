import { PrismaClient } from "@prisma/client";

async function main() {
  process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/db";

  const prisma = new PrismaClient();

  await prisma.user.create({
    data: {
      email: "foo@bar.com",
    },
  });
}

main().then();
