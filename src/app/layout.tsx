import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../config/theme";
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

export default function RootLayout({ children }: { children: any }) {
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
