import { Box, Group } from "@mantine/core";
import classes from "./header.module.css";
import Logo from "../logo";
import ThemeIcon from "./theme-icon";
import ViewerCount from "./viewer-count";


export default function Header() {

    return (
        <Box pos="sticky">
            <header className={ classes.header }>
                <Group justify="space-between" h="100%">
                    <Logo />
                    <Group h="100%">
                        <ViewerCount />
                        <ThemeIcon />
                    </Group>

                </Group>
            </header>
        </Box>
    );
}
