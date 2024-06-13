import { Group, rem, Text, Title } from "@mantine/core";
import { IconBrandNodejs } from "@tabler/icons-react";
import SectionContainer from "./container";
import ScrollDownArrow from "./scroll-down-arrow";

export default function MainSection() {
    return <SectionContainer>
        <Title size={ rem("62px") } fw={ 900 } lh={ 1.1 } m={ 0 } p={ 0 }>
            About me: <br />
            <Group justify="start">
                <Text variant="gradient" gradient={ { from: "teal", to: "lime" } } inherit>
                    JunHyuk Choi
                </Text>
                <Text pt="xl" inline c="dimmed">[최준혁]</Text>
            </Group>
            <Group justify="start">
                a.k.a.
                <Text variant="gradient" gradient={ { from: "lime", to: "teal" } } inherit>
                    RFLXN
                </Text>
                <Text pt="xl" c="dimmed">[리플]</Text>
            </Group>
        </Title>

        <Text size={ rem("24px") } mt="xl">
            Full-stack developer that mainly develops with Node.js
            <IconBrandNodejs size={ 24 } stroke={ 1.7 } color="#6cc24a" /> <br />
            (but prefer BE developer.)
        </Text>
        <Text size={ rem("20px") } mt="md" c="dimmed">
            Node.js를 주력으로 하는 풀스택 개발자입니다. <br />
            (하지만 주로 백엔드쪽을 선호합니다.)
        </Text>

        <ScrollDownArrow />
    </SectionContainer>;
}
