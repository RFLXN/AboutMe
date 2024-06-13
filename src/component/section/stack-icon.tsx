import { type ReactNode } from "react";
import { Box, Flex, Group, Text, ThemeIcon } from "@mantine/core";


export type StackIconProps = {
    icon: ReactNode,
    value: string
};

export default function StackIcon({ icon, value }: Readonly<StackIconProps>) {
    return <Group align="center" my="xs">
        <Box mr={ 0 }>
            <ThemeIcon variant="transparent" size="sm" color="dark">
                {icon}
            </ThemeIcon>
        </Box>
        <Flex align="center" h="100%" ml={ 0 }>
            <Text size="sm" my={ 0 }>{value}</Text>
        </Flex>
    </Group>;
}

