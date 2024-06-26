import { NextResponse } from "next/server";
import getDbClient from "../../../db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const db = getDbClient();
        await db.$connect();
        const count = await getDbClient().viewer.count();
        await db.$disconnect();
        return NextResponse.json({ success: true, count });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ success: false, error: "Failed to get viewer count" });
    }
}
