import { Group, rem, Text } from "@mantine/core";

export default function Logo() {
    return <Group gap={ 0 }>
        <Text mr={ 0 } fw={ 600 }>About:</Text>
        <Text ml={ rem("4px") } fw={ 600 } variant="gradient" gradient={ { from: "lime", to: "teal" } }>
            RFLXN
        </Text>
    </Group>;
}
