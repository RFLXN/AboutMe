import { type ReactNode } from "react";
import { Box, Flex, Group, Text, ThemeIcon } from "@mantine/core";


export type ProfileIconProps = {
    icon: ReactNode,
    value: string
};

export default function ProfileIcon({ icon, value }: Readonly<ProfileIconProps>) {
    return <Group align="center" my="md">
        <Box mr="md">
            <ThemeIcon variant="transparent" size="xl" color="dark">
                {icon}
            </ThemeIcon>
        </Box>
        <Flex align="center" h="100%">
            <Text size="lg" my={ 0 }>{value}</Text>
        </Flex>
    </Group>;
}

