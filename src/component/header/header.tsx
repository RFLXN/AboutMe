import { Box, Group } from "@mantine/core";
import classes from "./header.module.css";
import Logo from "../logo";
import ThemeIcon from "./theme-icon";
import dynamic from "next/dynamic";

const ViewerCountNoSSR = dynamic(() => import("./viewer-count"), { ssr: false });

export default function Header() {

    return (
        <Box pos="sticky">
            <header className={ classes.header }>
                <Group justify="space-between" h="100%">
                    <Logo />
                    <Group h="100%">
                        <ViewerCountNoSSR />
                        <ThemeIcon />
                    </Group>

                </Group>
            </header>
        </Box>
    );
}
