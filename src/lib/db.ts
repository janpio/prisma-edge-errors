import { PrismaClient } from "@prisma/client/edge";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ log: ['query']});
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({ log: ['query']});
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
export { type PrismaClient };
