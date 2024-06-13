import { Flex, Text, ThemeIcon } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

export default function ScrollDownArrow() {
    return <Flex justify="center" align="center" direction="column" mt="6rem">
        <Text c="dimmed">아래로 스크롤</Text>
        <ThemeIcon size="xl" color="green" variant="transparent">
            <IconArrowDown size={ 48 } />
        </ThemeIcon>
    </Flex>;
}
