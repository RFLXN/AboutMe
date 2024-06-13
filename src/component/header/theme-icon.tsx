"use client";

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeIcon() {
    const { toggleColorScheme } = useMantineColorScheme();
    const colorScheme = useComputedColorScheme();

    if (colorScheme == "dark") {
        return <ActionIcon size="lg" variant="default" color="gray" onClick={ toggleColorScheme }>
            <IconSun size={ 16 } />
        </ActionIcon>;
    } else {
        return <ActionIcon size="lg" variant="default" color="gray" onClick={ toggleColorScheme }>
            <IconMoon size={ 16 } />
        </ActionIcon>;
    }
}
