import Header from "../component/header/header";
import { ScrollSnapContainer, ScrollSnapElement } from "../component/scroll-snap";
import MainSection from "../component/section/main";
import ContactSection from "../component/section/contact";
import ProfileSection from "../component/section/profile";
import StackSection from "../component/section/stack";
import ProjectSection from "../component/section/project";
import { hash } from "../hash";
import getDbClient from "../db";
import { headers } from "next/headers";

async function doViewer(addr?: string) {
    if (!addr) return;

    try {
        const hashed = hash(addr);
        const db = getDbClient();
        await db.$connect();

        const lastConnect = await db.viewer.findFirst({
            where: {
                addressHash: hashed
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        if (lastConnect) {
            if (((Date.now().valueOf()) - lastConnect.createdAt.valueOf()) < (1000 * 60 * 30)) return;
        }

        await db.viewer.create({
            data: {
                addressHash: hashed
            }
        });

        await db.$disconnect();
    } catch (e) {
        console.error(e);
    }
}

export default async function HomePage() {
    const header = headers();
    const addr1 = header.get("X-Forwarded-For");
    const addr2 = header.get("x-forwarded-for");
    const clientAddr = addr1 || addr2 || "127.0.0.1";

    try {
        await doViewer(clientAddr);
    } catch (e) {
        console.error(e);
    }
    return <>
        <Header />
        <ScrollSnapContainer withTopButton>
            <ScrollSnapElement>
                <MainSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ProfileSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <StackSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ProjectSection />
            </ScrollSnapElement>
            <ScrollSnapElement>
                <ContactSection />
            </ScrollSnapElement>
        </ScrollSnapContainer>
    </>;
}
