import { type ReactNode } from "react";
import { Box, Flex, Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import Link from "next/link";


export type ContactIconProps = {
    icon: ReactNode,
    title: string,
    value: string,
    isLink?: boolean
};

export default function ContactIcon({ icon, title, value, isLink }: Readonly<ContactIconProps>) {
    return <Group align="center" my="md">
        <Box mr="md">
            <ThemeIcon variant="filled" size="xl" color="dark">
                {icon}
            </ThemeIcon>
        </Box>
        <Flex direction="column">
            <Text size="lg" my={ 0 }>{title}</Text>
            {
                isLink
                    ? <UnstyledButton component={ Link } href={ value }>
                        <Text c="dimmed" my={ 0 }>{value}</Text>
                    </UnstyledButton>
                    : <Text c="dimmed" my={ 0 }>{value}</Text>
            }
        </Flex>
    </Group>;
}

