import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../config/theme";
import { headers } from "next/headers";
import { hash } from "../hash";
import getDbClient from "../db";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About: RFLXN",
    description: "Introduction about RFLXN",
    metadataBase: new URL("https://about.rflxn.xyz"),
    applicationName: "About RFLXN",
    authors: [ { name: "RFLXN", url: "https://github.com/RFLXN" } ],
    openGraph: {
        title: "About: RFLXN",
        description: "Introduction about RFLXN",
        siteName: "About RFLXN",
        url: "https://about.rflxn.xyz"
    },
    twitter: {
        title: "About: RFLXN",
        description: "Introduction about RFLXN",
        site: "@RFLXN_DEV"
    }
};

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

export default function RootLayout({ children }: { children: any }) {
    const header = headers();
    const clientAddr = header.get("x-forwarded-for");

    doViewer(clientAddr)
        .then()
        .catch();

    return (
        <html lang="ko">
            <head>
                <ColorSchemeScript defaultColorScheme="auto" />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={ theme } defaultColorScheme="auto">{children}</MantineProvider>
            </body>
        </html>
    );
}
