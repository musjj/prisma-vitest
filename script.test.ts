import { test } from "vitest";
import { PrismaClient } from "@prisma/client";

test("foobar", async () => {
  process.env.POSTGRES_PRISMA_URL =
    "postgresql://postgres:postgres@localhost:5432/semicolon";

  const prisma = new PrismaClient();

  await prisma.user.create({
    data: {
      email: "foo@bar.com",
    },
  });
});
