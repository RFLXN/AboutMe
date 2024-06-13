import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

function getDbClient() {
    return client;
}

export default getDbClient;
